# Oceanopolis at SBR — Landing Page

Standalone landing page for **Oceanopolis** at **Sunteck Beach Residences (SBR)** — Mumbai's luxury beachfront living at Suruchi Beach, Vasai (W), by Sunteck Realty.

Independent static project (HTML/CSS/JS), no build step. All imagery is derived from the official SBR Oceanopolis customer deck (rendered to optimized WebP).

## Structure
```
sbr-oceanopolis-landing/
├── index.html   # all sections
├── styles.css   # navy / gold / ocean design system (warm, rounded, responsive)
├── script.js    # sticky nav, mobile menu, scroll-reveal, lightbox, enquiry form
└── assets/       # WebP images cropped from the deck
```

## Run
```bash
cd sbr-oceanopolis-landing && python3 -m http.server 5800
```
Open http://localhost:5800

## Sections
Hero · Highlights · Overview · Golf & Beach · Amenities (5 Islands) · Masterplan · Residences & Pricing · Location · Investment · Enquire · Footer

## Notes
- 2 & 3 bed residences from ₹1.50 Cr* onwards.
- MahaRERA: P99000045490 · P99000045499 · P99000045599 · PR1240002600716 · PR1240002600854 · maharera.mahaonline.gov.in
- Rendered / reference images are artist's impressions; actual may vary.
- Enquiry form is front-end only — wire it to your CRM before going live.
