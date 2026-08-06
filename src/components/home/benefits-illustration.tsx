export function GrowthIllustration({ className = "" }: { className?: string }) {
  const bars = [
    { x: 20, h: 34, delay: "0s" },
    { x: 55, h: 54, delay: "0.15s" },
    { x: 90, h: 42, delay: "0.3s" },
    { x: 125, h: 74, delay: "0.45s" },
    { x: 160, h: 60, delay: "0.6s" },
  ];
  const base = 150;

  return (
    <svg viewBox="0 0 200 160" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="gi-bar" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#A89968" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#4ADE80" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      <line x1="10" y1={base} x2="190" y2={base} stroke="#3A3A35" strokeWidth="1.5" />

      {bars.map((b, i) => (
        <rect key={i} x={b.x} y={base - b.h} width="18" height={b.h} rx="4" fill="url(#gi-bar)" opacity="0">
          <animate
            attributeName="opacity"
            from="0"
            to="1"
            dur="0.5s"
            begin={b.delay}
            fill="freeze"
          />
          <animate
            attributeName="height"
            from="0"
            to={b.h}
            dur="0.6s"
            begin={b.delay}
            fill="freeze"
            calcMode="spline"
            keySplines="0.2 0.8 0.2 1"
          />
          <animate
            attributeName="y"
            from={base}
            to={base - b.h}
            dur="0.6s"
            begin={b.delay}
            fill="freeze"
            calcMode="spline"
            keySplines="0.2 0.8 0.2 1"
          />
        </rect>
      ))}

      <path
        d="M20 100 L55 78 L90 92 L125 52 L160 66"
        stroke="#4ADE80"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.9"
      />
      <circle cx="160" cy="66" r="4" fill="#4ADE80">
        <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
