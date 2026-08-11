# BlackBoxPreps — the mark

A wireframe cube seen corner-on: a regular hexagon of radius 12 about (16, 16.5),
plus the near corner's three edges running to the alternating vertices. Nine
edges. Mitred joins, butt caps, `stroke-miterlimit: 8`.

Replaces `src/asset/blackbox.png` (608 kB of raster for nine straight lines).

## Files

| File | Use |
| --- | --- |
| `logo.svg` | Standard cut, black. 24px and above. |
| `logo-white.svg` | Same geometry reversed, for dark surfaces. |
| `logo-small.svg` | Heavy cut. 24px and below, and the source for the favicons. |
| `favicon.svg` | Small cut on a white tile. |
| `favicon-16/32/48.png` | Rasterised from `favicon.svg`. |
| `apple-touch-icon.png` | 180×180, opaque. |
| `logo-512.png` | Raster fallback for anything that cannot take SVG. |
| `og-image.png` | 1200×630 social card. |

**In React, use `src/component/Logo.tsx` instead of any of these.** It paints
with `currentColor` and picks the cut from `size`, so one component covers the
white header and the dark hero and cannot be used at the wrong weight.

## Two cuts, and why

The standard mark carries a 1.9 stroke. At 16px that renders under one device
pixel and the cube goes soft and grey. The small cut uses a 3.1 stroke on a
slightly tighter hexagon so the line stays solid and the interior arms stay
separate.

**This is not optional polish.** Shipping one cut at every size is the usual
reason a good mark looks muddy in a browser tab. `Logo.tsx` switches at 24px.

## Clear space and minimum size

- **Clear space:** one quarter of the mark's width on all four sides. Nothing —
  type, rules, image edges — inside it.
- **Minimum size:** 16px on screen, 6mm in print. Below that use the wordmark
  alone.
- The mark is **square**. Its bounding box is 32×32 including the visual
  overhang of the mitred corners; centre it on that box, not on the hexagon.

## Colour

Black `#0a0a0a` on light, white `#ffffff` on dark. That is the whole palette for
the mark.

Red `#e11d2e` belongs to the brand but **not to the logo** — several red
treatments were drawn and tested, and in a single ink the cube reads and in two
it starts competing with itself. Keep the red for the wordmark's "Preps", CTAs
and accents.

## Favicon uses a tile, deliberately

A black mark on transparency disappears in a dark-themed tab strip, which is
where most people will see it. `favicon.svg` puts the mark on a white rounded
tile so it holds contrast in both themes. The bare mark is for the navbar.

## Geometry, if it ever needs redrawing

```
hexagon  16,4.5  26.392,10.5  26.392,22.5  16,28.5  5.608,22.5  5.608,10.5
arms     centre (16,16.5) → 5.608,10.5 · 26.392,10.5 · 16,28.5
```

The hexagon is **regular** (R = 12). That matters: it is what makes the three
arms land exactly on alternating vertices, and it is why a 60° rotation of the
arms lands exactly on the other three — that rotation is the cube's hidden back
edges, which is worth knowing if the mark is ever animated.
