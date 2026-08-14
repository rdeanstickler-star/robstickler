# Rob Stickler

Personal site for Rob Stickler. Next.js on Vercel. Free to host. Custom domain optional.

Live: [https://robstickler.vercel.app](https://robstickler.vercel.app)

## Local

```bash
cd ~/robstickler
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Hosting

Vercel Hobby is free. From this folder:

```bash
vercel --prod
```

## Domain

`robstickler.com` was available when this was built. Buy it at Cloudflare (~$10) or through Vercel. Then:

1. In Vercel: Project → Settings → Domains → add `robstickler.com`
2. Point DNS as Vercel instructs
3. Add a Cloudflare email route from `hello@robstickler.com` to your real inbox
4. Set `CONTACT_EMAIL` and, if you want, `RESEND_API_KEY` in the Vercel project env so the form delivers

Until mail is wired, the form opens LinkedIn so nothing is lost.

## Contact form

Without env vars, submit falls back to LinkedIn. To receive mail:

- `CONTACT_EMAIL` alone uses FormSubmit (confirm the first message they send you)
- `CONTACT_EMAIL` + `RESEND_API_KEY` sends through Resend
