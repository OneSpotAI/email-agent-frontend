export function AgentIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="ai-glow" cx="50%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#4ADE80" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#4ADE80" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="100" cy="90" r="85" fill="url(#ai-glow)" />

      {/* antenna */}
      <line x1="100" y1="35" x2="100" y2="18" stroke="#4ADE80" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="100" cy="14" r="5" fill="#4ADE80">
        <animate attributeName="opacity" values="1;0.35;1" dur="2.2s" repeatCount="indefinite" />
      </circle>

      {/* head */}
      <rect x="45" y="35" width="110" height="90" rx="24" fill="#1B211C" stroke="#3A4A3E" strokeWidth="2" />

      {/* eyes */}
      <rect x="70" y="70" width="18" height="22" rx="9" fill="#4ADE80">
        <animate attributeName="height" values="22;3;22" keyTimes="0;0.5;1" dur="4.5s" begin="1s" repeatCount="indefinite" />
        <animate attributeName="y" values="70;80;70" keyTimes="0;0.5;1" dur="4.5s" begin="1s" repeatCount="indefinite" />
      </rect>
      <rect x="112" y="70" width="18" height="22" rx="9" fill="#4ADE80">
        <animate attributeName="height" values="22;3;22" keyTimes="0;0.5;1" dur="4.5s" begin="1s" repeatCount="indefinite" />
        <animate attributeName="y" values="70;80;70" keyTimes="0;0.5;1" dur="4.5s" begin="1s" repeatCount="indefinite" />
      </rect>

      {/* mouth / processing bar */}
      <rect x="78" y="104" width="44" height="6" rx="3" fill="#2E362F" />
      <rect x="78" y="104" width="18" height="6" rx="3" fill="#4ADE80">
        <animate attributeName="width" values="10;44;10" dur="3s" repeatCount="indefinite" />
      </rect>

      {/* side nodes / ears */}
      <circle cx="40" cy="80" r="7" fill="#232320" stroke="#3A4A3E" strokeWidth="1.5" />
      <circle cx="160" cy="80" r="7" fill="#232320" stroke="#3A4A3E" strokeWidth="1.5" />

      {/* body hint */}
      <path d="M60 125 L60 145 Q60 155 70 155 L130 155 Q140 155 140 145 L140 125" stroke="#3A4A3E" strokeWidth="2" fill="#1B211C" />
    </svg>
  );
}
