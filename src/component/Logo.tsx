/**
 * The BlackBoxPreps mark.
 *
 * Replaces `asset/blackbox.png` — 608 kB of raster for nine straight lines.
 * Inline SVG rather than <img src="logo.svg">: no second request on the
 * critical path, and it paints with `currentColor`, so the same component
 * works on the white header and the dark hero without a second file and
 * without the navbar having to know which surface it is on.
 *
 * Two cuts, chosen by size. Below 24px the standard 1.9 stroke renders under
 * one device pixel and the cube goes soft and grey; the small cut carries a
 * heavier line on a slightly tighter hexagon. Passing `size` picks the right
 * one automatically, so a caller cannot get it wrong.
 */

type LogoProps = {
  /** Rendered size in px. Default 40. Under 24 switches to the heavy cut. */
  size?: number
  /** Marks it decorative. Use when adjacent text already names the brand. */
  decorative?: boolean
  className?: string
}

const STANDARD = {
  hex: '16,4.5 26.392,10.5 26.392,22.5 16,28.5 5.608,22.5 5.608,10.5',
  arms: 'M16,16.5 L5.608,10.5 M16,16.5 L26.392,10.5 M16,16.5 L16,28.5',
  width: 1.9,
}

const SMALL = {
  hex: '16,5.6 25.53,11.1 25.53,22.1 16,27.6 6.47,22.1 6.47,11.1',
  arms: 'M16,16.6 L6.47,11.1 M16,16.6 L25.53,11.1 M16,16.6 L16,27.6',
  width: 3.1,
}

export default function Logo({ size = 40, decorative = false, className }: LogoProps) {
  const cut = size < 24 ? SMALL : STANDARD

  return (
    <svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={cut.width}
      strokeLinejoin="miter"
      strokeLinecap="butt"
      strokeMiterlimit={8}
      role={decorative ? undefined : 'img'}
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : 'BlackBoxPreps'}
    >
      {/* The silhouette. */}
      <polygon points={cut.hex} />
      {/* The near corner's three edges — the only part that makes it read as a
          cube rather than a hexagon. */}
      <path d={cut.arms} />
    </svg>
  )
}
