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

## Deploy (Netlify)

**Drag-and-drop:** zip the repo contents and drop at [app.netlify.com/drop](https://app.netlify.com/drop), then set the site name to `rose-builders-landing` so the canonical/OG URLs line up.

**Git-connected:** import this repo in Netlify — no build command, publish directory is the repo root (`/`). The `netlify.toml` headers apply automatically.

The enquiry form is wired for Netlify Forms (honeypot included) and submits to `/thank-you/`.

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```
