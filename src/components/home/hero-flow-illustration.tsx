export function HeroFlowIllustration() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.55]"
      viewBox="0 0 1200 600"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hfi-line-a" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1D7A46" stopOpacity="0" />
          <stop offset="50%" stopColor="#4ADE80" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#1D7A46" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="hfi-line-b" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#A89968" stopOpacity="0" />
          <stop offset="50%" stopColor="#D4C89A" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#A89968" stopOpacity="0" />
        </linearGradient>
      </defs>

      <path
        d="M -50 120 C 250 60, 450 220, 700 140 S 1150 60, 1300 130"
        stroke="#3A4A3E"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M -50 120 C 250 60, 450 220, 700 140 S 1150 60, 1300 130"
        stroke="url(#hfi-line-a)"
        strokeWidth="1.5"
        strokeDasharray="14 340"
        fill="none"
      >
        <animate attributeName="stroke-dashoffset" from="700" to="0" dur="6s" repeatCount="indefinite" />
      </path>

      <path
        d="M -50 420 C 220 480, 480 320, 760 400 S 1140 480, 1300 410"
        stroke="#3A3A35"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M -50 420 C 220 480, 480 320, 760 400 S 1140 480, 1300 410"
        stroke="url(#hfi-line-b)"
        strokeWidth="1.5"
        strokeDasharray="10 360"
        fill="none"
      >
        <animate attributeName="stroke-dashoffset" from="0" to="740" dur="7.5s" repeatCount="indefinite" />
      </path>

      <path
        d="M -50 280 C 300 220, 550 340, 820 260 S 1180 200, 1300 270"
        stroke="#2E362F"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M -50 280 C 300 220, 550 340, 820 260 S 1180 200, 1300 270"
        stroke="url(#hfi-line-a)"
        strokeWidth="1.5"
        strokeDasharray="8 380"
        fill="none"
      >
        <animate attributeName="stroke-dashoffset" from="780" to="0" dur="9s" repeatCount="indefinite" />
      </path>

      {[
        { cx: 180, cy: 90 },
        { cx: 520, cy: 200 },
        { cx: 860, cy: 120 },
        { cx: 260, cy: 450 },
        { cx: 640, cy: 350 },
        { cx: 980, cy: 430 },
      ].map((n, i) => (
        <circle key={i} cx={n.cx} cy={n.cy} r="2.5" fill="#4ADE80" opacity="0.5">
          <animate
            attributeName="opacity"
            values="0.15;0.7;0.15"
            dur={`${3 + (i % 3)}s`}
            begin={`${i * 0.4}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </svg>
  );
}
