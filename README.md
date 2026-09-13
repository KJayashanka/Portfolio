# Kanishka Liyanage — Portfolio

A personal portfolio site built with React, Three.js, and Node.js.

## Structure

- `client/` — React (Vite) frontend with Three.js/@react-three/fiber 3D accents, Framer Motion animations, and all page content in `client/src/data/content.js`.
- `server/` — Node.js/Express backend exposing a single `/api/contact` endpoint that emails messages from the contact form via Nodemailer.

## Running locally

### Server

```
cd server
npm install
copy .env.example .env   # then fill in real SMTP credentials
npm run dev
```

Server runs at `http://localhost:5000`.

### Client

```
cd client
npm install
npm run dev
```

Client runs at `http://localhost:5173`.

## Setting up the contact form email

The contact form needs real SMTP credentials in `server/.env` to actually send email. For Gmail:

1. Enable 2-Step Verification on the Gmail account.
2. Generate an App Password at https://myaccount.google.com/apppasswords.
3. Set in `server/.env`:
   ```
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=the-16-character-app-password
   CONTACT_RECEIVER=kanishka.jayashanka1@gmail.com
   ```

Without valid credentials, the form will submit correctly but the email send will fail with a friendly error message (this is expected and was verified during setup).

## Editing content

All personal content (bio, skills, projects, experience, contact info) lives in one file: `client/src/data/content.js`. Edit it directly — no need to touch component code to update text.

## Deployment notes

- `client` builds to a static site (`npm run build` → `client/dist`) — deployable to Vercel, Netlify, GitHub Pages, etc.
- `server` needs a Node host (Render, Railway, Fly.io, a VPS, etc.) since it sends email server-side.
- Set `VITE_API_URL` in the client's environment to point at the deployed server URL, and `CLIENT_ORIGIN` in the server's environment to the deployed client URL (for CORS).
