interface GGBangLogoProps {
  /** "icon" = mark only (32x32), "full" = mark + wordmark */
  readonly variant?: "icon" | "full";
  /** Height in pixels — icon defaults to 32, full defaults to 36 */
  readonly size?: number;
  /** Optional className */
  readonly className?: string;
}

/**
 * GGBANG brand mark — two interlocking payment arrows
 * forming a continuous loop with a hidden "G" in negative space.
 * Purple (#612FFF) = outbound flow, Cyan (#0BE2D6) = inbound flow.
 */
export function GGBangLogo({
  variant = "full",
  size,
  className = "",
}: GGBangLogoProps) {
  const h = size ?? (variant === "icon" ? 32 : 36);

  if (variant === "icon") {
    return (
      <svg
        viewBox="0 0 40 40"
        width={h}
        height={h}
        fill="none"
        className={className}
        aria-label="GGBANG"
      >
        <defs>
          <linearGradient id="gg-grad-a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#612FFF" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
          <linearGradient id="gg-grad-b" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0BE2D6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        {/* Arrow A — top-left to bottom-right (purple, outbound) */}
        <path
          d="M8 14 L20 6 L20 11 L32 11 L32 17 L20 17 L20 22 Z"
          fill="url(#gg-grad-a)"
        />
        {/* Arrow B — bottom-right to top-left (cyan, inbound) */}
        <path
          d="M32 26 L20 34 L20 29 L8 29 L8 23 L20 23 L20 18 Z"
          fill="url(#gg-grad-b)"
        />
        {/* Overlap intersection — blended */}
        <path
          d="M20 17 L20 18 L20 22 L20 23 L8 23 L8 17 Z"
          fill="#612FFF"
          opacity="0.15"
        />
      </svg>
    );
  }

  // Full logo: mark + wordmark
  const markW = h;
  const textH = h * 0.44;
  const totalW = markW + h * 3.2;

  return (
    <svg
      viewBox={`0 0 ${totalW} ${h}`}
      width={totalW}
      height={h}
      fill="none"
      className={className}
      aria-label="GGBANG"
    >
      <defs>
        <linearGradient id="gg-full-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#612FFF" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
        <linearGradient id="gg-full-b" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0BE2D6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>

      {/* Icon mark scaled to fit height */}
      <g transform={`scale(${h / 40})`}>
        <path
          d="M8 14 L20 6 L20 11 L32 11 L32 17 L20 17 L20 22 Z"
          fill="url(#gg-full-a)"
        />
        <path
          d="M32 26 L20 34 L20 29 L8 29 L8 23 L20 23 L20 18 Z"
          fill="url(#gg-full-b)"
        />
        <path
          d="M20 17 L20 18 L20 22 L20 23 L8 23 L8 17 Z"
          fill="#612FFF"
          opacity="0.15"
        />
      </g>

      {/* Wordmark */}
      <text
        x={markW + h * 0.25}
        y={h * 0.62}
        fill="#1A2332"
        fontSize={textH}
        fontWeight="700"
        fontFamily="Sora, system-ui, sans-serif"
        letterSpacing={h * 0.02}
      >
        GGBANG
      </text>
    </svg>
  );
}
