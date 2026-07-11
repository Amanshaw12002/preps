import { useId, type CSSProperties, type ReactNode } from "react";

interface ElectricBorderProps {
  children?: ReactNode;
  /** stroke + glow color */
  color?: string;
  /** animation speed multiplier — 1 = default, higher = faster crackle */
  speed?: number;
  /** how far the edge is displaced — higher = wilder, more jagged arcs */
  chaos?: number;
  /** border width in px */
  thickness?: number;
  /** corner radius in px */
  radius?: number;
  className?: string;
  style?: CSSProperties;
  /** inner padding so content clears the crackling edge */
  padding?: number | string;
}

/**
 * ElectricBorder — a rounded frame whose edge crackles like live electricity.
 * The trick: a plain stroked rounded rectangle is warped by an animated
 * feTurbulence + feDisplacementMap filter, so its edge writhes into organic
 * branching arcs. Stacked blurred copies give the neon glow.
 */
export default function ElectricBorder({
  children,
  color = "#ff2a38",
  speed = 1,
  chaos = 1,
  thickness = 2,
  radius = 24,
  className = "",
  style,
  padding = 0,
}: ElectricBorderProps) {
  const rawId = useId().replace(/[:]/g, "");
  const filterId = `eb-filter-${rawId}`;
  const dur = 6 / speed;
  const scale = 26 * chaos;

  const cssVars = {
    "--eb-color": color,
    "--eb-thickness": `${thickness}px`,
    "--eb-radius": `${radius}px`,
  } as CSSProperties;

  return (
    <div
      className={`eb-root ${className}`}
      style={{ ...style, ...cssVars, padding }}
    >
      {/* animated noise → displacement filter */}
      <svg className="eb-defs" aria-hidden="true">
        <defs>
          <filter
            id={filterId}
            colorInterpolationFilters="sRGB"
            x="-30%"
            y="-30%"
            width="160%"
            height="160%"
          >
            {/* vertical writhe */}
            <feTurbulence
              type="turbulence"
              baseFrequency="0.02"
              numOctaves={10}
              seed={2}
              result="n1"
            />
            <feOffset in="n1" dx={0} dy={0} result="o1">
              <animate
                attributeName="dy"
                values="700;0"
                dur={`${dur}s`}
                repeatCount="indefinite"
                calcMode="linear"
              />
            </feOffset>
            <feTurbulence
              type="turbulence"
              baseFrequency="0.02"
              numOctaves={10}
              seed={2}
              result="n2"
            />
            <feOffset in="n2" dx={0} dy={0} result="o2">
              <animate
                attributeName="dy"
                values="0;-700"
                dur={`${dur}s`}
                repeatCount="indefinite"
                calcMode="linear"
              />
            </feOffset>
            <feComposite in="o1" in2="o2" result="vert" />

            {/* horizontal writhe */}
            <feTurbulence
              type="turbulence"
              baseFrequency="0.02"
              numOctaves={10}
              seed={2}
              result="n3"
            />
            <feOffset in="n3" dx={0} dy={0} result="o3">
              <animate
                attributeName="dx"
                values="490;0"
                dur={`${dur}s`}
                repeatCount="indefinite"
                calcMode="linear"
              />
            </feOffset>
            <feTurbulence
              type="turbulence"
              baseFrequency="0.02"
              numOctaves={10}
              seed={2}
              result="n4"
            />
            <feOffset in="n4" dx={0} dy={0} result="o4">
              <animate
                attributeName="dx"
                values="0;-490"
                dur={`${dur}s`}
                repeatCount="indefinite"
                calcMode="linear"
              />
            </feOffset>
            <feComposite in="o3" in2="o4" result="horz" />

            <feBlend in="vert" in2="horz" mode="color-dodge" result="noise" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={scale}
              xChannelSelector="R"
              yChannelSelector="B"
            />
          </filter>
        </defs>
      </svg>

      {/* stacked stroke layers = electric edge + neon glow */}
      <div className="eb-layers" aria-hidden="true">
        <div
          className="eb-stroke eb-glow-outer"
          style={{ filter: `url(#${filterId}) blur(6px)` }}
        />
        <div
          className="eb-stroke eb-glow-inner"
          style={{ filter: `url(#${filterId}) blur(2px)` }}
        />
        <div
          className="eb-stroke eb-main"
          style={{ filter: `url(#${filterId})` }}
        />
        <div
          className="eb-stroke eb-core"
          style={{ filter: `url(#${filterId})` }}
        />
        <div className="eb-bg-glow" />
      </div>

      <div className="eb-content">{children}</div>

      <style>{`
        .eb-root {
          position: relative;
          border-radius: var(--eb-radius);
          isolation: isolate;
        }
        .eb-defs { position: absolute; width: 0; height: 0; }
        .eb-layers {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          pointer-events: none;
        }
        .eb-stroke {
          position: absolute;
          inset: 0;
          border-radius: var(--eb-radius);
          border: var(--eb-thickness) solid var(--eb-color);
          box-sizing: border-box;
          will-change: filter;
        }
        .eb-main { opacity: 1; }
        .eb-core {
          border-color: #ffe4e6;
          border-width: max(1px, calc(var(--eb-thickness) - 1px));
          opacity: 0.9;
          mix-blend-mode: screen;
        }
        .eb-glow-inner { opacity: 0.7; }
        .eb-glow-outer { opacity: 0.5; }
        .eb-bg-glow {
          position: absolute;
          inset: 0;
          border-radius: var(--eb-radius);
          box-shadow:
            0 0 18px 1px color-mix(in srgb, var(--eb-color) 60%, transparent) inset,
            0 0 26px 2px color-mix(in srgb, var(--eb-color) 45%, transparent);
          opacity: 0.5;
        }
        .eb-content { position: relative; height: 100%; }
      `}</style>
    </div>
  );
}
