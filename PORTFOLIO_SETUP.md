# Portfolio — Setup Guide

This project now mirrors the reference site's stack: **React + Vite + Tailwind CSS v4**, `react-router-dom` for
page routing, and `lucide-react` for icons. Everything is scaffolded with placeholder content — the goal of
this guide is to get it running locally and point you at the one file you need to edit to make it yours.

## 1. Install and run

```bash
cd Portfolio-hena
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`). You should see the full site — nav, hero, experience,
projects, awards, and contact page — all working with placeholder text.

## 2. Make it yours: one file to edit

Almost everything on the site — your name, role, bio, skills, work/education timeline, projects, and awards —
comes from a single file:

```
src/data/portfolio.ts
```

Edit the arrays there and every page updates automatically. No need to touch component or page files unless
you want to change layout or styling.

Also:
- Drop your resume as `public/resume.pdf` (the "view_resume()" button links to `/resume.pdf`).
- Swap `public/favicon.svg` for your own icon if you'd like.

## 3. Set up the contact form (Formspree)

The contact form submits each message to [Formspree](https://formspree.io) — a free, backend-free form
endpoint (no server or database to run), so the message sends directly from the page without leaving it or
opening an email app. Until you connect a form, it shows a friendly "not configured yet" notice instead of
breaking — so this step is optional if you don't need the form working right away.

**Create a Formspree form (free tier is enough):**

1. Go to [formspree.io](https://formspree.io) and sign up (email or GitHub/Google sign-in).
2. Click **New Form**, give it a name (e.g. `Portfolio contact`), and set the recipient email to
   `henakharwa@gmail.com`.
3. On the form's dashboard, copy the **Form ID** from its endpoint URL:
   `https://formspree.io/f/YOUR_FORM_ID` — you just need the `YOUR_FORM_ID` part.

**Wire it into the project:**

```bash
cp .env.example .env
```

Paste your form ID into `VITE_FORMSPREE_FORM_ID` in `.env`, then restart `npm run dev`. Submit the contact
form once — Formspree emails you the submission and shows it on your form's dashboard (the free tier includes
your first submission without email confirmation; after that, Formspree may ask you to confirm your first
real submission by email — this is normal and one-time).

`.env` is already git-ignored, so your form ID won't get committed (though it isn't a secret — it only accepts
submissions shaped like this form).

## 4. Deploying

The reference site was deployed on Heroku with a small Express server. Simpler options that need zero backend
code (this is a static Vite build) work just as well:

- **GitHub Pages** (free, what this project is set up for): see the checklist below — there are two small
  gotchas specific to Pages that don't apply to Vercel/Netlify.
- **Vercel** or **Netlify**: connect the repo, build command `npm run build`, output directory `dist`. Add
  `VITE_FORMSPREE_FORM_ID` and `VITE_AI_WORKER_URL` in the project's environment settings. No gotchas — skip
  the checklist below.
- **Heroku** (to match the reference exactly): needs a tiny Express static server + a `Procfile` — ask if you'd
  like this added.

**Deploying to GitHub Pages — checklist:**

1. **Base path.** If your site will live at `https://YOUR-USERNAME.github.io/` (a root user/org page), skip
   this step. If it'll live at `https://YOUR-USERNAME.github.io/REPO-NAME/` (a project page — the common case),
   add the repo name as a base path in `vite.config.ts`:
   ```ts
   export default defineConfig({
     base: '/REPO-NAME/',
     plugins: [react(), tailwindcss()],
   })
   ```
   and pass the same value as `basename` to `BrowserRouter` in `src/main.tsx`:
   ```tsx
   <BrowserRouter basename="/REPO-NAME/">
   ```
   Without this, page assets and client-side routes (like `/projects`) will 404 on Pages.
2. **Client-side routing on refresh.** GitHub Pages serves static files with no server-side rewrites, so
   reloading `/projects` directly (or sharing that link) 404s unless you add the standard Pages SPA workaround
   (a `404.html` that redirects to `index.html`). Ask if you'd like this wired in.
3. **Build and publish** with the `gh-pages` package (`npm install -D gh-pages`, add a `"deploy": "npm run
   build && gh-pages -d dist"` script, then `npm run deploy`) or a GitHub Actions workflow — either works.
4. Set `VITE_FORMSPREE_FORM_ID` and `VITE_AI_WORKER_URL` as **repository secrets** (Settings → Secrets and
   variables → Actions) if you're building via GitHub Actions, since GitHub Pages itself has no env-variable
   step — Vite needs them at *build* time, not runtime.

## 5. Set up the AI assistant terminal

The terminal-style "Ask My AI" section on the homepage lets visitors ask free-text questions about your
skills, experience, and projects — it's always visible on the page, no button to click. It's answered by
Google Gemini (free tier), called through a small Cloudflare Worker that keeps your Gemini API key private —
the widget's browser code never sees the key. Until you set this up, the widget shows a friendly "not
configured yet" notice instead of a broken chat, so this step is optional if you don't need it working right
away.

**Why a separate Worker?** GitHub Pages only serves static files — it can't run backend code, so there's
nowhere on Pages to safely hold an API key. Cloudflare Workers has a genuinely free tier (100,000
requests/day, no credit card) and is one of the few options that can sit in front of a static GitHub Pages
site just for this one job.

**Step 1 — Get a free Gemini API key:**

1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey) and sign in with a Google account.
2. Click **Create API key**. No credit card is required for the free tier.
3. Copy the key — you'll paste it in Step 3 below. Keep it secret; don't put it in any file that gets
   committed (the Worker holds it as a secret, not as code).

**Step 2 — Install Wrangler (Cloudflare's CLI) and log in:**

```bash
cd worker
npm install
npx wrangler login
```

This opens a browser tab to authorize Wrangler against your (free) Cloudflare account — create one at
[cloudflare.com](https://www.cloudflare.com) if you don't have one yet.

**Step 3 — Store your Gemini key as a Worker secret** (this uploads it securely to Cloudflare — it never
touches your repo):

```bash
npx wrangler secret put GEMINI_API_KEY
```

Paste the key from Step 1 when prompted.

**Step 4 — Set which sites may call the Worker.** Open `worker/wrangler.toml` and replace the placeholder in
`ALLOWED_ORIGINS` with your actual GitHub Pages URL (keep the `localhost:5173` entry for local dev):

```toml
ALLOWED_ORIGINS = "http://localhost:5173,https://YOUR-USERNAME.github.io"
```

**Step 5 — Deploy the Worker:**

```bash
npx wrangler deploy
```

Wrangler prints a URL like `https://ask-hena-ai.YOUR-SUBDOMAIN.workers.dev` — copy it.

**Step 6 — Wire the Worker URL into the main site:**

```bash
cd ..
cp .env.example .env   # if you haven't already for the contact form
```

Paste the Worker URL from Step 5 into `VITE_AI_WORKER_URL` in `.env`, then restart `npm run dev` (or rebuild
and redeploy the site if it's already live). Try the widget — it's the terminal window under "Ask My AI" on
the homepage. Type something like "What are your top skills?" and press Enter.

**Keeping answers accurate:** the assistant only knows what's in `worker/src/knowledge.ts` — a plain-text
summary of your background that's kept in sync by hand with `src/data/portfolio.ts`. When you update your
skills, projects, experience, or awards in `portfolio.ts`, update the matching facts in
`worker/src/knowledge.ts` too, then re-run `npx wrangler deploy` from the `worker/` folder so the change goes
live.

**Cost:** Gemini's free tier and Cloudflare Workers' free tier both have generous daily limits well beyond
what a portfolio site would see — you're extremely unlikely to hit either one or be charged anything.

## 6. What's already done vs. what's placeholder

| Done | Placeholder — edit in `src/data/portfolio.ts` |
| --- | --- |
| Dark theme, glass-panel cards, Inter + JetBrains Mono fonts | Your name, role, bio |
| Nav with route-style links, social icons | Social links (GitHub/LinkedIn/etc.) |
| Routing: `/`, `/experience`, `/projects`, `/awards`, `/contact` | Timeline entries (jobs/education) |
| Contact form wired to Formspree | Projects (with live/repo links) |
| SEO meta tags, Open Graph, Twitter card | Awards/certificates |
| "Ask My AI" terminal widget (Gemini + Cloudflare Worker) | Assistant's knowledge base (`worker/src/knowledge.ts`) |
