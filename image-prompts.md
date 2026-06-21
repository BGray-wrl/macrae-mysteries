# Background image prompts for nano banana pro

Goal: replace `public/boston.png` with a generated image that has a similar role — a dimmed, atmospheric Boston backdrop behind the hero headline. The image will sit under `brightness-[0.3]` in `src/app/page.tsx`, so it needs negative space for text and low mid-tone contrast.

Generate all four, compare dimmed in-browser, then pick.

---

## 1. Charles River / harbor view (closest to current vibe)

Cinematic wide establishing shot of Boston at night, viewed from across the Charles River. The skyline reflected on dark water, mix of historic brick and modern glass towers, scattered amber and cold blue window lights. Light fog drifting low over the river, soft reflections on the water surface. Deep navy and teal sky filling the upper two-thirds of the frame. No people, no boats, no text, no logos, no watermarks. Desaturated color grade, Roger Deakins lighting, 35mm anamorphic, 16:9 aspect ratio. Designed as a background plate — low contrast, no central focal point, atmospheric and quiet.

---

## 2. Beacon Hill / Back Bay street (intimate, noir)

Cinematic empty Boston side street at night, after rain — Beacon Hill or Back Bay character. Wet cobblestones and brick reflecting sodium-vapor gas lamps in amber and pale green. Brownstone rowhouses with darkened windows recede into fog on both sides. Shot from a low elevated angle looking down the street, vanishing point off-center. Heavy atmospheric haze, deep shadows, no people, no cars, no signage, no text. Desaturated teal-and-amber color grade, *Mystic River* / *Spotlight* tonal palette. 16:9, shallow depth of field, background plate composition with large negative space in the upper sky.

---

## 3. Boston hospital tower at night (ties to the medical thriller hook)

Cinematic wide shot of a large Boston hospital tower at night, viewed from several blocks away through light fog — Longwood Medical Area or MGH character, generic enough to not copy any specific building. Cold fluorescent light spilling from a grid of windows, most dark, a few faintly lit. Surrounding low brick buildings in silhouette. Deep navy sky above filling more than half the frame, faint city glow on the horizon. No identifiable signage, no logos, no people, no helicopters. Clinical, cold, slightly oppressive mood. Desaturated blue-green color grade, anamorphic 16:9, low contrast background-plate composition.

---

## 4. Boston skyline from elevation (direct replacement for current image)

Cinematic high-angle view of the Boston skyline at night, seen from across the harbor or from an elevated vantage in Cambridge. Mix of Financial District towers, Back Bay brownstones, and harbor in the foreground. Scattered window lights in warm amber against a cold blue-black night. Light fog softening the middle distance, large empty sky in the upper half of the frame. No people, no vehicles, no text, no logos, no watermarks. Roger Deakins / Greig Fraser lighting, desaturated palette, 16:9 anamorphic, low contrast designed for use as a website background under dimmed overlay.

---

## Tuning knobs if the first pass misses

- **Too bright:** add "underexposed, night-for-night, ISO 800 film grain."
- **Too busy in the center** (where the headline sits): add "composition weighted to the lower third, upper two-thirds empty negative space."
- **Colors feel wrong once dimmed:** ask for "preserves shadow detail when darkened, mid-tones in the 30–50% range."
- **Looks too pulpy/generic-thriller:** add "restrained, literary, no neon, no rain-slick action movie aesthetic."

## After generating

1. Save the chosen image to `public/` (e.g. `public/boston-bg.png`).
2. Update the `src` in `src/app/page.tsx:24` from `/boston.png` to the new filename.
3. View in-browser at the existing `brightness-[0.3]` filter to confirm the headline still pops.
