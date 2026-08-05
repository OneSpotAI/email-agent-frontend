export function ApprovalIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" className={className} fill="none" aria-hidden="true">
      {/* person */}
      <circle cx="55" cy="55" r="20" fill="#232320" stroke="#3A3A35" strokeWidth="2" />
      <path
        d="M25 130 Q25 90 55 90 Q85 90 85 130"
        fill="#232320"
        stroke="#3A3A35"
        strokeWidth="2"
      />

      {/* document card */}
      <rect x="95" y="45" width="80" height="95" rx="10" fill="#1B211C" stroke="#3A4A3E" strokeWidth="2" />
      <line x1="110" y1="65" x2="160" y2="65" stroke="#3A4A3E" strokeWidth="3" strokeLinecap="round" />
      <line x1="110" y1="80" x2="150" y2="80" stroke="#3A4A3E" strokeWidth="3" strokeLinecap="round" />
      <line x1="110" y1="95" x2="155" y2="95" stroke="#3A4A3E" strokeWidth="3" strokeLinecap="round" />

      {/* approval seal */}
      <circle cx="150" cy="118" r="16" fill="#1D7A46" opacity="0.9">
        <animate attributeName="r" values="14;17;14" dur="2.4s" repeatCount="indefinite" />
      </circle>
      <path
        d="M143 118 L148 123 L158 111"
        stroke="#FCFBF7"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
