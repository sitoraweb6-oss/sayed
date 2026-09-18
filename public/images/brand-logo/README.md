# Client / Brand Logos

Place your client and partner brand logos directly into this folder:

`public/images/brand-logo/`

## Automatic Image Discovery
- Any image uploaded here will be **automatically detected** and displayed in the brand showcase section.
- Supported formats: `.png`, `.jpg`, `.jpeg`, `.webp`, `.svg`, `.avif`.
- No manual TypeScript array editing is needed.
- Filenames can be anything (e.g. `logo-1.png`, `company-x.svg`, `brand.webp`).

## Display Rules
- **1–7 logos**: Displayed in 1 centered/continuous row.
- **8–13 logos**: Displayed in 1 continuous marquee row.
- **14 logos**: Displayed in exactly 2 rows (7 logos per row).
- **> 14 logos**: Distributed in alternating rows (max 7 logos per row) with alternating marquee directions (Right-to-Left, Left-to-Right).
- **Empty**: Section hides gracefully without broken image placeholders.
