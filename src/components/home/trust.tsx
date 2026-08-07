import { useInViewOnce } from "@/hooks/use-in-view-once";

const POINTS = [
  {
    title: "Human Approval",
    description:
      "Every quotation is reviewed before sending. AI prepares the draft, while your team approves every response.",
  },
  {
    title: "Private by Default",
    description:
      "Your catalog, inbox, and customer data remain secure within your workspace at every stage of processing.",
  },
  {
    title: "Complete Audit Trail",
    description:
      "Every quotation, approval, edit, and customer interaction is logged with a searchable history for accountability.",
  },
  {
    title: "Controlled Email Access",
    description:
      "The AI operates within a defined RFQ workflow, accessing only the emails required to understand customer requests.",
  },
];

export function Trust() {
  const { ref, inView } = useInViewOnce<HTMLElement>();

  return (
    <section
      ref={ref}
      id="trust"
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
            Built for Enterprise Reliability
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-8 text-[#666660]">
            FastQuote is designed with enterprise-grade security, transparency,
            and human oversight, ensuring every quotation is accurate,
            traceable, and fully under your control.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          {POINTS.map((point, index) => (
            <div
              key={point.title}
              className={`transition-all duration-700 ${
                inView ? "" : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 120}ms`,
              }}
            >
              <div className="group flex h-full flex-col rounded-3xl border border-[#EEE9E0] bg-white/80 p-8 shadow-[0_18px_60px_rgba(26,26,26,0.05)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(26,26,26,0.08)] md:p-10">

                <div className="mb-6 h-[2px] w-12 rounded-full bg-[#1A1A1A] transition-all duration-300 group-hover:w-20" />

                <h3
                  className="mb-4 text-[1.35rem] leading-tight text-[#1A1A1A]"
                  style={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontWeight: 500,
                  }}
                >
                  {point.title}
                </h3>

                <p className="flex-1 text-[15px] leading-8 text-[#666660]">
                  {point.description}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}