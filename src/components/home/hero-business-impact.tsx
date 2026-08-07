import { useInViewOnce } from "@/hooks/use-in-view-once";

const ROWS = [
  {
    label: "Time to First Quote",
    manual: "1–2 days to respond",
    agent: "5 minutes to respond",
  },
  {
    label: "RFQ Visibility",
    manual: "Manual inbox tracking",
    agent: "Automatic RFQ tracking",
  },
  {
    label: "Pricing Accuracy",
    manual: "Manual pricing process",
    agent: "Catalog-driven pricing",
  },
  {
    label: "Scalability",
    manual: "Team grows with demand",
    agent: "Business scales effortlessly",
  },
];

const fadeUp = (inView: boolean) =>
  `opacity-100 motion-safe:transition-all motion-safe:ease-out motion-safe:duration-700 ${
    inView
      ? ""
      : "motion-safe:translate-y-10 motion-safe:opacity-0"
  }`;

export function HeroBusinessImpact() {
  const { ref, inView } = useInViewOnce<HTMLDivElement>();

  return (
    <section
      ref={ref}
      className="mt-24"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      {/* Heading */}
      <div
        className={`mb-16 text-center transition-all duration-700 ${
          inView ? "" : "-translate-y-6 opacity-0"
        }`}
      >
        <h2
          className="text-[2.2rem] font-medium leading-[1.08] tracking-[-0.04em] text-[#1A1A1A] md:text-[2.8rem]"
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
          }}
        >
          Why FastQuote
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-8 text-[#666660]">
          Compare traditional quotation workflows with an AI-assisted process
          that delivers faster responses, greater accuracy, and effortless
          scalability.
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">

        {/* Manual */}
        <div
          className={`rounded-3xl border border-[#EEE9E0] bg-white/80 p-8 shadow-[0_18px_60px_rgba(26,26,26,0.05)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(26,26,26,0.08)] md:p-10 ${fadeUp(
            inView
          )}`}
          style={{ transitionDelay: "100ms" }}
        >
          <span className="mb-8 block text-xs font-semibold uppercase tracking-[0.22em] text-[#1A1A1A]">
            Quoting manually
          </span>

          <div className="grid gap-6">
            {ROWS.map((row) => (
              <div
                key={row.label}
                className="flex items-start justify-between gap-6 border-b border-[#EEE9E0] pb-5 last:border-0 last:pb-0 max-[560px]:flex-col max-[560px]:gap-2"
              >
                <span className="text-[15px] font-medium text-[#5E5E58]">
                  {row.label}
                </span>

                <span className="whitespace-nowrap text-right font-mono text-[16px] font-semibold text-[#1A1A1A] max-[560px]:text-left">
                  {row.manual}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* FastQuote */}
        <div
          className={`rounded-3xl border border-[#E8F1EA] bg-white/80 p-8 shadow-[0_18px_60px_rgba(26,26,26,0.05)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(26,26,26,0.08)] md:p-10 ${fadeUp(
            inView
          )}`}
          style={{ transitionDelay: "200ms" }}
        >
          <span className="mb-8 block text-xs font-semibold uppercase tracking-[0.22em] text-[#1D7A46]">
            With FastQuote
          </span>

          <div className="grid gap-6">
            {ROWS.map((row) => (
              <div
                key={row.label}
                className="flex items-start justify-between gap-6 border-b border-[#E8F1EA] pb-5 last:border-0 last:pb-0 max-[560px]:flex-col max-[560px]:gap-2"
              >
                <span className="text-[15px] font-medium text-[#5E5E58]">
                  {row.label}
                </span>

                <span className="whitespace-nowrap text-right font-mono text-[16px] font-semibold text-[#1D7A46] max-[560px]:text-left">
                  {row.agent}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}