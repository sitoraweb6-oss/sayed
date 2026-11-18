# Changes made (AI/crawler visibility + canonical bug fix)

## Bug #1: wrong canonical domain (confirmed, now fixed)
Every canonical tag, Open Graph URL/image, Twitter image, and every `@id`/`url`
inside the JSON-LD graph pointed to `https://www.sitora.org` (the agency site)
instead of this site's own domain. This looked like a copy-paste from the
Sitora Web codebase that was never updated. Effect: Google (and anyone else)
was being told "the real version of this page lives on sitora.org, don't
index this one" — on every single page.

Fixed everywhere, in:
- `index.html` (canonical, OG, Twitter, full JSON-LD graph)
- `src/pages/Home.tsx`, `Work.tsx`, `About.tsx`, `Contact.tsx`,
  `PrivacyPolicy.tsx`, `CaseStudy.tsx` (their `<Helmet>` blocks)
- `public/sitemap.xml`, `public/robots.txt`

Left untouched (these were already correct):
- `hello@sitora.org` (the agency's shared contact email)
- `worksFor.url` in the Person JSON-LD (correctly points to the agency,
  `sitora.org`, since that's who you work for)
- Also removed a self-referencing entry from `sameAs` (a JSON-LD person's
  `sameAs` should list *other* profile pages for the same person — LinkedIn,
  GitHub, etc. — not the page itself). Only your LinkedIn URL remains there;
  tell me if you want GitHub or another profile added.

## Bug #2: content invisible to non-JS crawlers — now real SSR
This project is unusual in a good way: it already had Express, React Router,
and `react-helmet-async` with full per-page `<Helmet>` tags wired up. The one
missing piece was that the server never actually rendered any of it — it just
served a near-empty shell and let the browser's JS fill everything in. Same
root problem as sitora.org: most AI crawlers and answer engines don't run JS,
so they saw nothing.

Instead of the headless-Chrome workaround used for sitora.org, this project's
existing server made **real server-side rendering** the right fix:

- **`src/AppRoutes.tsx`** (new) — the client route tree, still code-split with
  `lazy`/`Suspense` for bundle size, used by `App.tsx` under `BrowserRouter`.
- **`src/AppRoutesServer.tsx`** (new) — the *same* routes, but with pages
  imported eagerly instead of lazily. `renderToString` runs in one
  synchronous pass and can't wait for a lazy import to resolve — without this,
  the server would render a loading spinner for every route instead of real
  content.
- **`src/entry-server.tsx`** (new) — renders the matched route to an HTML
  string and collects that route's Helmet tags (title, description,
  canonical, OG, Twitter).
- **`src/main.tsx`** — switched from `createRoot` to `hydrateRoot`, since the
  HTML now arrives pre-rendered from the server.
- **`index.html`** — the old static title/description/OG/Twitter/canonical
  tags are replaced with a single `<!--app-head-->` placeholder, and
  `<div id="root">` now contains `<!--app-html-->`. `server.ts` fills both in
  per-request.
- **`server.ts`** — rewritten to actually render each request:
  - Dev mode uses Vite's own SSR APIs (`transformIndexHtml` +
    `ssrLoadModule`), so `npm run dev` already gives you real SSR with
    working HMR.
  - Production mode loads the prebuilt `dist/server/entry-server.js` and
    renders each request against the cached `dist/client/index.html`
    template.
  - If rendering ever throws, it falls back to a generic homepage head +
    the empty client shell rather than a 500 — a bug in one page won't take
    the whole site down, it'll just lose SSR for that one request.
- **Found and fixed a real landmine**: `src/components/home/SelectedWork.tsx`
  read `window.innerWidth` directly inside a `useState` initializer. That
  runs during render, and `window` doesn't exist in Node — this would have
  crashed the server on every request to the homepage. Guarded it with a
  `typeof window !== 'undefined'` check (defaults to desktop sizing on the
  server; corrects itself on the client after mount).
- **`vite.config.ts`** — added a dedicated output config for the SSR build
  (fixed filename, `entry-server.js`) so `server.ts` always knows where to
  find it.
- **`package.json`** — build is now two steps: `build:client` (the browser
  bundle, → `dist/client`) and `build:ssr` (the Node SSR bundle, →
  `dist/server`), then the existing esbuild step bundles `server.ts` into
  `dist/server.cjs` as before. `npm run build` runs all of it; `npm start`
  sets `NODE_ENV=production` and runs the result. Also fixed `clean` (it
  referenced a stale `server.js` filename that doesn't match the actual
  build output, `server.cjs`).
- **`public/llms.txt`** (new) — plain-text summary of who you are, what you
  do, and your key pages, for AI tools that read this file directly.
- **`public/robots.txt`** — added explicit `Allow: /` lines (with the
  existing `Disallow: /api/` repeated for consistency) for GPTBot,
  ChatGPT-User, ClaudeBot, Claude-User, anthropic-ai, PerplexityBot,
  Perplexity-User, Google-Extended, Applebot-Extended, and Bingbot.
  Functionally unchanged (the wildcard rule already allowed them) — just
  unambiguous.

## ⚠️ Important: existing `vercel.json` is now incompatible
This repo already had a `vercel.json` - but it's configured for a **static**
SPA deploy (`outputDirectory: "dist"`, every route rewritten to
`/index.html`). That assumes there's no server at all.

Now that there's a real Express SSR server (`server.ts` → `dist/server.cjs`),
that old config would not run it. If deployed as-is on Vercel, the site would
try to serve a static `dist/index.html` that doesn't even exist anymore
(the build now outputs `dist/client/index.html` and `dist/server/`
separately) - visitors would likely see a broken or blank page, or the
literal `<!--app-head-->`/`<!--app-html-->` placeholders unreplaced.

**I didn't change `vercel.json` myself because the right fix depends on where
you actually deploy this site** - tell me which and I'll fix it in the next
pass:
- **Still Vercel**: needs converting to run `server.ts` as a serverless
  function (a different `vercel.json` shape entirely - `@vercel/node` builds
  + routes).
- **A plain Node host** (VPS, Railway, Render, DigitalOcean App Platform,
  etc.) running `npm start` as a long-lived process: `vercel.json` is simply
  unused there - I'd just remove it so it doesn't mislead anyone later.

Please don't deploy the current build output as-is until this is sorted out.

## Before you deploy
1. Run `npm install` on a machine with normal internet access (this sandbox
   is network-restricted, so I could not run the install or a full build
   myself here).
2. `npm run dev` first — this already exercises real SSR, so it's the
   fastest way to catch any issue. Open a few routes (`/`, `/work`, `/about`,
   `/work/<a-real-slug>`) and view source (not DevTools' "Inspect", the
   actual raw "View Page Source") to confirm you see real content, not a
   loading spinner.
3. Then `npm run build && npm start` and repeat the same check against the
   production build.
4. If `tsc --noEmit` (the `lint` script) flags anything in the new files,
   send it my way — I wrote and reasoned through these carefully but could
   not run the TypeScript compiler in this sandbox to confirm.
5. On Windows (if you ever build/run there outside WSL), `NODE_ENV=production`
   in the `start` script needs `cross-env` — tell me if that's relevant to
   you and I'll add it.
