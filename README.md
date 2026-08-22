# Bella Vista

A responsive single-page restaurant site for Bella Vista, a fictional modern Italian restaurant in New York's West Village.

## Stack

- Next.js 16 App Router
- React 19 and TypeScript
- Tailwind CSS v4
- Lucide React icons

## Local development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`. Reservation requests submit to `POST /api/reservations`; the route validates the payload and logs the request server-side. Connect the route to an email or reservation provider before production use.

## Deployment

Deploy the project to Vercel from the dashboard or by connecting the repository. No environment variables are required for the included reservation endpoint.
