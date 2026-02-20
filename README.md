# MC Octopus Painting LLC

Professional contractor website for MC Octopus Painting – residential and commercial interior & exterior painting.

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

## Future Integrations (commented in code)

- n8n webhooks
- Gumloop automation
- SMS API
- Email automation
- CRM push
