# Rose Builders — Landing Page

Award-calibre redesign concept for [rosebuilders.co.uk](https://rosebuilders.co.uk) — five-generation family builder, main contractor and new-home developer across Essex & Suffolk (est. 1896).

## Stack

Hand-written static HTML/CSS/JS — no framework, no build step. Self-hosted variable fonts, responsive WebP imagery, vanilla JS (hide-on-scroll header, reveal animations, developments carousel, Netlify form).

## Structure

- `index.html` — landing page (hero, stats, three crafts, developments carousel, selected work, heritage timeline, credentials, enquiry form, news, footer)
- `thank-you/` — form submission confirmation (noindex)
- `assets/css/styles.css` — design system & layout
- `assets/js/main.js` — interactions
- `assets/fonts/` — self-hosted variable fonts (Fraunces, Archivo, Space Mono — latin subsets)
- `assets/img/` — WebP image set, favicons, OG image
- `netlify.toml` — caching + security headers
- `robots.txt`, `sitemap.xml`

## ⚠️ Binary assets

This repo currently contains the full text source. The binary assets (`assets/img/*`, `assets/fonts/*`) ship separately as `rose-builders-landing.zip` (delivered with the project handover). To complete the repo, unzip it and commit the two folders:

```bash
unzip rose-builders-landing.zip -d rose-builders-landing
cd rose-builders-landing
git init && git add -A
git commit -m "Complete site with binary assets"
git remote add origin git@github.com:abbie0107/rose-builders-landing.git
git push -f origin main   # one-time: replaces the text-only history
```

(Or simply drag the `assets` folder into the repo via GitHub's web upload.)

## Deploy (Netlify)

**Fastest — drag-and-drop:** drop `rose-builders-landing.zip` at [app.netlify.com/drop](https://app.netlify.com/drop), then set the site name to `rose-builders-landing` (Site settings → Change site name) so the canonical/OG/sitemap URLs line up.

**Git-connected:** once the binary assets are committed (above), import this repo in Netlify — no build command, publish directory is the repo root (`/`). The `netlify.toml` headers apply automatically.

The enquiry form is wired for Netlify Forms (honeypot included) and submits to `/thank-you/`.

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```
