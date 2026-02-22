# Lead-Gen Factory

Multi-tenant contractor website template. One codebase, N client deployments via env vars.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- Mobile-first responsive
- SEO-ready with metadata and JSON-LD schema
- Production-ready for Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Pages

- `/` – Home (Hero, Services, Gallery, Why Choose Us, Estimate Form)
- `/services` – Residential & Commercial services
- `/about` – Company info
- `/contact` – Contact form & info
- `/thank-you` – Post-submit confirmation

## API Routes

- `POST /api/lead` – Estimate form submissions (ready for n8n/Gumloop webhooks)
- `POST /api/chat-lead` – Chat widget qualification data (ready for webhooks)

## Brand Colors

- **Red:** `#c41e3a` (brand-red)
- **Blue:** `#1e3a8a` (brand-blue)
- **White:** `#ffffff`

## Lead-Gen Factory: Deploy New Clients

Add to `clients.json`:

```json
{
  "clients": [
    { "name": "Acme Painting", "city": "Seattle" }
  ]
}
```

Deploy:

```bash
export VERCEL_TOKEN="..."
export GITHUB_REPO="yeshuaoguilver-a11y/octopus-painting"
python scripts/deploy_client.py acme-painting
```

## Git Remote

```bash
git remote set-url origin https://github.com/yeshuaoguilver-a11y/octopus-painting.git
git push -u origin main
```

## Future Integrations (commented in code)

- n8n webhooks
- Gumloop automation
- SMS API
- Email automation
- CRM push
