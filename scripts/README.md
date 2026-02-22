# Lead-Gen Factory Deployment

## clients.json

Add clients to trigger new $5k/month deployments. Minimal entry:

```json
{
  "clients": [
    {
      "name": "Acme Painting",
      "city": "Seattle"
    }
  ]
}
```

Optional fields: `phone`, `email`, `primaryColor`, `primaryColorDark`, `siteUrl`, `slug`.

## Deploy a Client

```bash
export VERCEL_TOKEN="your_vercel_token"
export GITHUB_REPO="your-username/your-factory-repo"

python scripts/deploy_client.py acme-painting
```

Or deploy all:

```bash
python scripts/deploy_client.py --all
```

Get VERCEL_TOKEN from https://vercel.com/account/tokens
