#!/usr/bin/env python3
"""
Lead-Gen Factory: Deploy a new client site to Vercel.

Usage:
  python scripts/deploy_client.py <client_slug>
  python scripts/deploy_client.py --all   # Deploy all from clients.json

Requires:
  - VERCEL_TOKEN env var (get from https://vercel.com/account/tokens)
  - GITHUB_REPO env var (e.g. yeshuaoguilver-a11y/lead-gen-factory)
"""

import json
import os
import re
import sys
from pathlib import Path

try:
    import requests
except ImportError:
    print("Install requests: pip install requests")
    sys.exit(1)

VERCEL_API = "https://api.vercel.com"
CLIENTS_JSON = Path(__file__).resolve().parent.parent / "clients.json"


def slugify(name: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")


def load_clients() -> list[dict]:
    with open(CLIENTS_JSON) as f:
        data = json.load(f)
    return data.get("clients", [])


def get_client_by_slug(slug: str) -> dict | None:
    for c in load_clients():
        if slugify(c["name"]) == slug or c.get("slug") == slug:
            return c
    return None


def create_project(token: str, client: dict, repo: str) -> dict:
    name = client.get("slug") or slugify(client["name"])
    payload = {
        "name": name,
        "framework": "nextjs",
        "gitRepository": {
            "type": "github",
            "repo": repo,
        },
    }
    r = requests.post(
        f"{VERCEL_API}/v10/projects",
        headers={"Authorization": f"Bearer {token}"},
        json=payload,
    )
    if r.status_code == 201:
        return r.json()
    if r.status_code == 409:
        # Project exists, fetch it
        r2 = requests.get(
            f"{VERCEL_API}/v9/projects/{name}",
            headers={"Authorization": f"Bearer {token}"},
        )
        if r2.status_code == 200:
            return r2.json()
    r.raise_for_status()
    return r.json()


def set_env_vars(
    token: str,
    project_id: str,
    client: dict,
) -> None:
    env_vars = [
        ("NEXT_PUBLIC_BUSINESS_NAME", client["name"]),
        ("NEXT_PUBLIC_BUSINESS_NAME_SHORT", client["name"].upper()),
        ("NEXT_PUBLIC_CITY", client["city"]),
        ("NEXT_PUBLIC_PHONE", client.get("phone", "")),
        ("NEXT_PUBLIC_EMAIL", client.get("email", "")),
        ("NEXT_PUBLIC_PRIMARY_COLOR", client.get("primaryColor", "#c41e3a")),
        ("NEXT_PUBLIC_PRIMARY_COLOR_DARK", client.get("primaryColorDark", "#9e1830")),
        ("NEXT_PUBLIC_SITE_URL", client.get("siteUrl", "")),
    ]
    for key, value in env_vars:
        if not value:
            continue
        payload = {
            "key": key,
            "value": str(value),
            "type": "plain",
            "target": ["production", "preview"],
        }
        r = requests.post(
            f"{VERCEL_API}/v10/projects/{project_id}/env",
            headers={"Authorization": f"Bearer {token}"},
            params={"upsert": "true"},
            json=payload,
        )
        if r.status_code not in (200, 201):
            print(f"  Warning: failed to set {key}: {r.text}")


def deploy_client(client: dict) -> None:
    token = os.environ.get("VERCEL_TOKEN")
    repo = os.environ.get("GITHUB_REPO", "yeshuaoguilver-a11y/joshua-painting-site")

    if not token:
        print("Set VERCEL_TOKEN env var")
        sys.exit(1)

    print(f"Deploying: {client['name']} ({client['city']})")
    proj = create_project(token, client, repo)
    project_id = proj.get("id") or proj.get("name")
    print(f"  Project: {proj.get('name')}")

    set_env_vars(token, project_id, client)
    print(f"  Env vars set")
    print(f"  URL: https://{proj.get('name')}.vercel.app")


def main() -> None:
    if len(sys.argv) < 2:
        print(__doc__)
        print("\nclients.json structure:")
        print('  {"clients":[{"name":"Acme Painting","city":"Seattle"}]}')
        sys.exit(1)

    arg = sys.argv[1]
    if arg == "--all":
        clients = load_clients()
        for c in clients:
            deploy_client(c)
            print()
    else:
        client = get_client_by_slug(arg)
        if not client:
            print(f"Client not found: {arg}")
            sys.exit(1)
        deploy_client(client)


if __name__ == "__main__":
    main()
