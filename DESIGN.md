# 8TPS Website Design Guidelines

## Design Philosophy

Accessible, professional, joyful. The design should reflect trans excellence and community while maintaining a polished, easy-to-navigate experience.

---

## Design References

**Are.na Board**: "8TPS Website Inspo" — https://www.are.na/share/dVLSYnR
(11 references, roughly ordered by how much the client likes them. Reviewed 2026-07-22.)

| # | Site | URL | What they like |
|---|------|-----|----------------|
| 1 | Roomful of Teeth | https://www.roomfulofteeth.org/ | Large, interesting header photo on landing page; pull quote carousel; multiple parts to the about section (story, about, organization) |
| 2 | The King's Singers | https://www.kingssingers.com/ | Clean design; video page has videos in rows rather than full vertical space; videos have clear text overlay before you hit play |
| 3 | HEX Ensemble | https://www.hexensemble.org/ | Pull quote carousel; Services tab |
| 4 | Trans Chorus of Los Angeles | https://transchorusla.org/ | Nav bar simplicity; multiple sections on a single page rather than multiple pages in a nav bar section |
| 5 | Barcelona Gay Men's Chorus | https://www.barcelonagmc.org/ | Sizzle reel playing on landing page |
| 6 | Gay Men's Chorus of Los Angeles | https://www.gmcla.org/ | Landing page has summaries of each main section, then you can go to each page to learn more |
| 7 | The L.A. Choral Lab | https://www.lachorallab.org/ | Key words at the top (8TPS's are "Community. Artistry. Joy."); large, interesting graphics |
| 8 | Cantus | https://www.cantussings.org/ | Color story; sheet music page (for later) |
| 9 | Tonality | https://www.ourtonality.org/ | United color story |
| 10 | TRANScend Ambassadors & Community Chorale | https://www.transcendsings.org/ | Color story |
| 11 | Wild Up | https://www.wildup.org/ | Ongoing projects carousel |

### Takeaways from the board

- **Pull quote carousel** appears repeatedly (Roomful of Teeth, HEX) — confirms MVP requirement
- **Cohesive color story** is a strong theme (Cantus, Tonality, TRANScend) — pull from style guide
- **Simple nav + single-page sections** (Trans Chorus LA) over deep page hierarchies
- **Section summaries on landing page** linking to full pages (GMCLA)
- **Big header photo/graphics** (Roomful of Teeth, L.A. Choral Lab) — but must not block body text per constraints
- **Sizzle reel on header** (Barcelona GMC) — matches Phase 2 "silent sizzle reel" item
- **Videos in rows with text overlays** (King's Singers) — pattern for Media page

---

## Hard Constraints (Must Avoid)

| Constraint | Reason |
|------------|--------|
| Heavy navigation bars | Clunky, hard to navigate |
| Header images blocking body text | Users should see text without scrolling |
| Animated section changes | Distracting |
| Fade-in text effects | Slow, frustrating |
| Infinite scroll / continuous loading | Performance, accessibility |
| Low-contrast colors | Accessibility (WCAG compliance) |
| Pop-up modals | Intrusive |

---

## Accessibility Requirements

- WCAG 2.1 AA compliance minimum
- High contrast text/background ratios
- Alt text for all images
- Keyboard navigation support
- Screen reader compatibility
- No motion that can't be disabled

---

## Typography

From the official style guide (`assets/epk/8TPS Style Guide 2026.pdf`):

| Role | Font | Reference Size |
|------|------|----------------|
| Titles | **Sailors** | 72 |
| Subtitles (stylized or plain) | **Flatory Sans** | 28 |
| Body text | **Inclusive Sans** | 18 |

**Expanded design guidance** (from style guide): look for constrained but expressive handwriting and sans serif fonts (similar to the logo "8TPS" text). Prioritize readability and accessibility, consistently weighted letters with thick strokes, and an upright angle.

*Squarespace note*: these fonts may not be natively available; use Adobe Fonts/Google Fonts equivalents or upload via custom CSS. Inclusive Sans is on Google Fonts.

---

## Color Palette

From the official style guide:

| Hex | Color | Role |
|-----|-------|------|
| `#F14EEA` | Magenta/pink | Brand primary |
| `#55C6FE` | Sky blue | Brand primary |
| `#5D54ED` | Indigo/violet | Brand primary (style guide header bars use this) |
| `#411CB8` | Deep purple | Brand dark / text on light |

Supporting palette (seen throughout style guide): soft pastel pink / lavender / baby blue vertical stripes (trans flag reference) as background treatment; white content cards with rounded corners and bold colored borders.

---

## Logo Usage

From the style guide, three cassette-based logo variants (files in `assets/epk/Logos/`):

| Variant | File | When to use |
|---------|------|-------------|
| Cassette & Bottom Text | `8TPS Logo_Lower Text.png` | Ensemble name NOT elsewhere on graphic; small placement or vertical shape |
| Cassette & Inner Text | `8TPS Logo_Inner Text.png` | Ensemble name NOT elsewhere; larger placement for readability, or limited vertical space |
| Cassette (No Text) | `8TPS Cassette Icon.png` | Ensemble name IS elsewhere on page; also watermark / calling card / signature icon |

White-background JPG versions of both text variants also included. Alternate icons (unspooled-tape cassette, "8" tape-loop mark) are reserved for merch, for stylistic reference only.

**Website application**: footer logo per SCOPE.md — use Cassette & Bottom/Inner Text since name may not repeat in footer; cassette-only icon can serve as favicon.

---

## Photography Style

EPK photos in `assets/epk/` (Performance and Education folders):

- **Performance**: cast photos (gradient + transparent BG versions), Never Change still, Celebration Honors Gala, INVENTING/INVITING tech rehearsal, Life Cycle of a Fever Dream, STRONG WORDS Voices of the City, This Is How We Love (Muckenthaler 2026), VOICES Disabled Artists Showcase
- **Education**: Life Cycle of a Fever Dream talkback, Long Beach Family Arts Festival, UCCLB Words and Music class
- Style guide leans on colorful stage photography in rounded-corner frames with bold colored borders (magenta/blue/purple)
- Cast photo (transparent BG) is a strong hero-image candidate over a brand-color background

---

## Layout Principles

1. **Text-first**: Body content visible immediately, no scroll required
2. **Minimal navigation**: Few clear options
3. **Generous whitespace**: Clean, breathable layouts
4. **Mobile-responsive**: Squarespace handles this, but verify
5. **Fast loading**: Optimize images, minimal scripts

---

## Squarespace Considerations

### Recommended Template Families

Look for templates that support:
- Minimal header options
- Strong typography
- Gallery/portfolio features
- Contact forms
- Easy content updates

### Potential Templates to Evaluate

- Brine family (flexible, minimal)
- Bedford family (clean, professional)
- Pacific family (modern, bold)

*Final selection after reviewing Are.na references*

---

## Interactive Elements

| Element | Behavior |
|---------|----------|
| Pull quote carousel | Smooth, auto-advance with manual controls |
| Photo galleries | Grid or masonry, click to expand |
| Video embeds | Thumbnail, click to play (not autoplay) |
| Contact form | Simple, clear validation |
| Social links | Icon links, open in new tab |

---

## Notes

- No emojis unless client specifically requests
- Professional but warm tone
- Celebrate identity without tokenizing
