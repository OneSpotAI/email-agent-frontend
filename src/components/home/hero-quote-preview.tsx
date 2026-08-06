import { Mail, CheckCircle2, FileText, TrendingUp, Users } from "lucide-react";
import { useInViewOnce } from "@/hooks/use-in-view-once";

const LINE_ITEMS = [
  { label: "Line item A", value: "$4,200" },
  { label: "Line item B", value: "$1,850" },
  { label: "Shipping", value: "$300" },
];

export function HeroQuotePreview() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();

  return (
    <div ref={ref} className="relative w-full max-w-[440px] py-10">
      {/* main quotation card */}
      <div
        className={`relative rounded-2xl border border-[#3A4A3E] bg-[#1B211C] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)] motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
          inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
        style={{ transitionDelay: "150ms" }}
      >
        <div className="flex items-center justify-between border-b border-[#3A4A3E] pb-3">
          <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-[#9BA89F]">
            <FileText className="h-3 w-3" strokeWidth={2} />
            Quotation
          </span>
          <span
            className={`relative flex items-center gap-1.5 rounded-full bg-[color-mix(in_srgb,#1D7A46_25%,transparent)] px-2.5 py-1 text-[11px] font-medium text-[#4ADE80] motion-safe:transition-all motion-safe:duration-500 motion-safe:ease-out ${
              inView ? "scale-100 opacity-100" : "scale-50 opacity-0"
            }`}
            style={{ transitionDelay: "750ms" }}
          >
            {inView && (
              <span className="motion-safe:animate-[qp-pulse-ring_2.2s_ease-out_infinite] absolute inset-0 rounded-full border border-[#4ADE80]" />
            )}
            <CheckCircle2 className="h-3.5 w-3.5" strokeWidth={2} />
            Approved
          </span>
        </div>

        <div className="mt-4 flex flex-col gap-3">
          {LINE_ITEMS.map((item, idx) => (
            <div
              key={item.label}
              className={`flex items-baseline justify-between gap-4 motion-safe:transition-all motion-safe:duration-500 motion-safe:ease-out ${
                inView ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
              }`}
              style={{ transitionDelay: `${300 + idx * 120}ms` }}
            >
              <span className="text-[13px] text-[#9BA89F]">{item.label}</span>
              <span className="whitespace-nowrap font-mono text-[13px] text-cream">{item.value}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-baseline justify-between border-t border-[#3A4A3E] pt-3">
          <span className="text-[13px] font-medium text-cream">Total</span>
          <span className="font-mono text-[18px] font-bold text-cream">$6,350</span>
        </div>

        <div className="mt-4 flex items-center gap-2 border-t border-[#3A4A3E] pt-3">
          <div className="flex -space-x-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#1B211C] bg-[#3A4A3E]">
              <Users className="h-3 w-3 text-[#9BA89F]" strokeWidth={2} />
            </span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#1B211C] bg-[color-mix(in_srgb,#1D7A46_35%,#3A4A3E)]">
              <Users className="h-3 w-3 text-[#4ADE80]" strokeWidth={2} />
            </span>
          </div>
          <span className="text-[11px] text-[#9BA89F]">Reviewed &amp; sent</span>
        </div>
      </div>

      {/* floating notification card */}
      <div
        className={`absolute -left-6 -top-4 w-[190px] motion-safe:transition-all motion-safe:duration-600 motion-safe:ease-out ${
          inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
        style={{ transitionDelay: "80ms" }}
      >
        <div
          className={`rounded-xl border border-[#3A4A3E] bg-[#232B25] p-3.5 shadow-[0_16px_40px_rgba(0,0,0,0.4)] ${
            inView ? "motion-safe:animate-[qp-float-a_4.5s_ease-in-out_infinite]" : ""
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[color-mix(in_srgb,#1D7A46_25%,#232B25)] text-[#4ADE80]">
              <Mail className="h-3.5 w-3.5" strokeWidth={1.75} />
            </span>
            <div>
              <p className="text-[11px] font-medium text-cream">New RFQ received</p>
              <p className="font-mono text-[9.5px] uppercase tracking-[0.1em] text-[#9BA89F]">Just now</p>
            </div>
          </div>
        </div>
      </div>

      {/* floating stat card */}
      <div
        className={`absolute -bottom-6 -right-3 w-[168px] motion-safe:transition-all motion-safe:duration-600 motion-safe:ease-out ${
          inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
        style={{ transitionDelay: "850ms" }}
      >
        <div
          className={`rounded-xl border border-[#4A4530] bg-[#232320] p-3.5 shadow-[0_16px_40px_rgba(0,0,0,0.4)] ${
            inView ? "motion-safe:animate-[qp-float-b_5s_ease-in-out_infinite]" : ""
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-[9.5px] uppercase tracking-[0.1em] text-[#B0A87E]">Avg. response</span>
            <TrendingUp className="h-3 w-3 text-gold" strokeWidth={2} />
          </div>
          <p className="mt-1 font-mono text-[22px] font-bold text-cream">5 min</p>
          <p className="text-[10px] text-[#9BA89F]">vs. 1–2 days manually</p>
        </div>
      </div>

      <style>{`
        @keyframes qp-float-a {
          0%, 100% { transform: translateY(0) rotate(-3deg); }
          50% { transform: translateY(-10px) rotate(-3deg); }
        }
        @keyframes qp-float-b {
          0%, 100% { transform: translateY(0) rotate(3deg); }
          50% { transform: translateY(-12px) rotate(3deg); }
        }
        @keyframes qp-pulse-ring {
          0% { transform: scale(1); opacity: 0.7; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .motion-safe\\:animate-\\[qp-float-a_4\\.5s_ease-in-out_infinite\\],
          .motion-safe\\:animate-\\[qp-float-b_5s_ease-in-out_infinite\\],
          .motion-safe\\:animate-\\[qp-pulse-ring_2\\.2s_ease-out_infinite\\] { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
