/**
 * Image optimiser. `npm run images`
 *
 * The single biggest performance problem in this build: 5.7 MB of images on
 * the home page, a 19.5 MB PNG behind a 288px box, and nothing sized to how it
 * is actually displayed. Lighthouse put the mobile LCP at 28.9 s against a
 * total blocking time of 40 ms — the main thread was idle, the network was not.
 *
 * What this does:
 *   1. Copies every source it touches to src/asset/original/ (once, never
 *      overwritten) so the change is reversible.
 *   2. Writes a .webp next to each source, resized to TARGETS below.
 *   3. Writes an .avif as well for the few images large enough on screen to
 *      earn a <picture> element.
 *
 * TARGETS ARE THE DISPLAYED SIZE AT 2x, read off the className each image is
 * rendered with — not a guess. `IMG_6565 2.png` renders in a `w-72` box, i.e.
 * 288 CSS px, so 576 is a retina-sharp source and everything above it is waste
 * that a phone still has to download.
 */

import { readFile, writeFile, mkdir, copyFile, access, stat } from 'node:fs/promises'
import { join, parse } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const ASSETS = join(ROOT, 'src/asset')
const BACKUP = join(ASSETS, 'original')

/** file → max width in px. Derived from the class each image renders with. */
const TARGETS = {
  'inside.jpg': 2048, // hero, max-w-5xl (1024) at 2x — this is the LCP image
  'IMG_6565 2.png': 576, // w-72 (288) at 2x
  'check.jpg': 1600,
  'man2.jpg': 1400,
  'man3.jpg': 1400,
  'maninblack.png': 1400,
  'inbound.jpg': 1200,
  'inventory.jpg': 1200,
  'outbound.jpg': 1200,
  '1.png': 800, // slider card, h-48
  '2.png': 800,
  '3.png': 800,
  '4.png': 800,
}

/** Also gets an AVIF, because it is big enough on screen for the gain to matter. */
const WITH_AVIF = new Set(['inside.jpg', 'check.jpg', 'man2.jpg', 'man3.jpg', 'maninblack.png'])

const kb = (n) => `${(n / 1024).toFixed(0)} kB`

async function exists(p) {
  try {
    await access(p)
    return true
  } catch {
    return false
  }
}

async function main() {
  await mkdir(BACKUP, { recursive: true })

  let before = 0
  let after = 0
  const rows = []

  for (const [file, width] of Object.entries(TARGETS)) {
    const source = join(ASSETS, file)
    if (!(await exists(source))) {
      console.warn(`  skipped, not found: ${file}`)
      continue
    }

    // Back up once. Never overwrite — a second run must not archive the
    // already-optimised file over the true original.
    const backup = join(BACKUP, file)
    if (!(await exists(backup))) await copyFile(source, backup)

    const input = await readFile(backup)
    const meta = await sharp(input).metadata()
    const sourceBytes = (await stat(backup)).size
    before += sourceBytes

    const { name } = parse(file)
    const pipeline = () => sharp(input).resize({ width, withoutEnlargement: true })

    const webpPath = join(ASSETS, `${name}.webp`)
    await pipeline().webp({ quality: 78 }).toFile(webpPath)
    const webpBytes = (await stat(webpPath)).size
    after += webpBytes

    let avifBytes = 0
    if (WITH_AVIF.has(file)) {
      const avifPath = join(ASSETS, `${name}.avif`)
      await pipeline().avif({ quality: 55, effort: 5 }).toFile(avifPath)
      avifBytes = (await stat(avifPath)).size
    }

    rows.push(
      `  ${file.padEnd(18)} ${String(meta.width).padStart(5)}px → ${String(width).padStart(4)}px   ` +
        `${kb(sourceBytes).padStart(9)} → ${kb(webpBytes).padStart(8)} webp` +
        (avifBytes ? `, ${kb(avifBytes)} avif` : ''),
    )
  }

  console.log(rows.join('\n'))
  console.log(
    `\n  ${kb(before)} of source → ${kb(after)} of WebP. ` +
      `${(100 - (after / before) * 100).toFixed(1)}% smaller.`,
  )
  console.log(`  Originals archived in src/asset/original/ — nothing was destroyed.`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
