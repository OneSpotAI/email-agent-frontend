import { useInViewOnce } from "@/hooks/use-in-view-once";

const STEPS = [
  {
    n: "01",
    title: "RFQ Processing",
    description:
      "Monitors your inbox, understands complex requests, extracts requirements from unstructured data with high accuracy.",
  },
  {
    n: "02",
    title: "Intelligent Pricing",
    description:
      "Understands requirements, matches products across complex catalogs, asks clarifying questions, and generates accurate pricing.",
  },
  {
    n: "03",
    title: "Review & Approval",
    description:
      "Review generated quotations, verify products and pricing, approve with confidence, then send with complete audit trails.",
  },
];

export function HowItWorks() {
  const { ref, inView } = useInViewOnce<HTMLElement>();

  return (
    <section
      ref={ref}
      id="how-it-works"
      className="border-t border-[#EEE9E0] bg-[#FCFBF7] py-24"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div
          className={`mx-auto mb-20 max-w-3xl text-center transition-all duration-700 ${
            inView ? "" : "translate-y-8 opacity-0"
          }`}
        >
          <h2
            className="text-[2.2rem] leading-[1.08] tracking-[-0.04em] text-[#1A1A1A] md:text-[2.8rem]"
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontWeight: 500,
            }}
          >
            How It Works
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-8 text-[#666660]">
            From receiving an RFQ to sending a polished quotation, FastQuote
            streamlines every step while keeping your team in complete control.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {STEPS.map((s, idx) => (
            <div
              key={s.n}
              className={`transition-all duration-700 ${
                inView ? "" : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: `${idx * 120}ms`,
              }}
            >
              <div className="group relative flex h-full flex-col rounded-3xl border border-[#EEE9E0] bg-white/80 p-8 shadow-[0_18px_60px_rgba(26,26,26,0.05)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_32px_80px_rgba(26,26,26,0.08)] md:p-10">

                {/* Step Number */}
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-[#D8D2C7] bg-[#FCFBF7] font-mono text-sm font-semibold text-[#7B7B73] transition-all duration-300 group-hover:border-[#1A1A1A] group-hover:bg-[#1A1A1A] group-hover:text-white">
                  {s.n}
                </div>

                {/* Title */}
                <h3
                  className="mb-4 text-[1.35rem] leading-tight text-[#1A1A1A]"
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontWeight: 500,
                  }}
                >
                  {s.title}
                </h3>

                {/* Description */}
                <p className="flex-1 text-[15px] leading-8 text-[#666660]">
                  {s.description}
                </p>

                {/* Bottom Accent */}
                <div className="mt-8 h-[2px] w-12 rounded-full bg-[#1A1A1A] transition-all duration-300 group-hover:w-20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}