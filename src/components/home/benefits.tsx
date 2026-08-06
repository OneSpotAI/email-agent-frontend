import { Zap, TrendingUp, Timer, RefreshCw } from "lucide-react";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { GrowthIllustration } from "./benefits-illustration";

const BENEFITS = [
  {
    icon: Zap,
    title: "Capture Every Opportunity",
    description: "Every RFQ is processed as soon as it arrives, so no opportunity goes unnoticed.",
  },
  {
    icon: TrendingUp,
    title: "Handle Higher Volumes",
    description: "Process thousands of products and growing RFQ volumes without adding manual effort.",
  },
  {
    icon: Timer,
    title: "Respond Before Competitors",
    description: "Prepare quotations within minutes to improve response times and win more business.",
  },
  {
    icon: RefreshCw,
    title: "Stay Consistent as You Grow",
    description: "Every quotation follows the same pricing logic, regardless of volume.",
  },
];

export function Benefits() {
  const { ref, inView } = useInViewOnce<HTMLElement>();

  return (
    <section
      ref={ref}
      className="border-t border-[#2E362F] bg-ink"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div
          className={`mx-auto mb-14 flex max-w-[750px] flex-col items-center gap-3 text-center opacity-100 motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
            inView ? "" : "motion-safe:-translate-x-10 motion-safe:opacity-0"
          }`}
        >
          {inView && <GrowthIllustration className="h-20 w-24" />}
          <h2
            className="text-[1.75rem] font-semibold leading-[1.15] tracking-[-0.5px] text-cream md:text-[2.5rem]"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Scale Your Business, Not Your Team.
          </h2>
        </div>

        <div className="relative mx-auto max-w-[1000px]">
          <div className="relative grid grid-cols-1 gap-5 md:grid-cols-3 md:[grid-auto-rows:170px] md:gap-5">
            {BENEFITS.map((b, idx) => {
              const spans = [
                "md:col-span-2 md:row-span-1",
                "md:col-span-1 md:row-span-2",
                "md:col-span-1 md:row-span-1",
                "md:col-span-1 md:row-span-1",
              ];
              return (
                <div
                  key={b.title}
                  className={`${spans[idx]} opacity-100 motion-safe:transition-all motion-safe:ease-out motion-safe:[transition-duration:800ms] ${
                    inView ? "" : "motion-safe:translate-y-10 motion-safe:opacity-0"
                  }`}
                  style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
                >
                  <div className="group flex h-full min-h-[170px] flex-col justify-between rounded-2xl border border-[#3A3530] bg-[#232320] p-6 transition-all duration-[350ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:-translate-y-1 hover:border-gold hover:shadow-[0_16px_40px_rgba(168,153,104,0.2)]">
                    <div>
                      <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[color-mix(in_srgb,#A89968_22%,#232320)] text-gold transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-gold group-hover:text-ink">
                        <b.icon className="h-4.5 w-4.5" strokeWidth={1.75} />
                      </span>
                      <h3 className="mb-[0.9rem] text-[1.05rem] font-bold text-cream">{b.title}</h3>
                      <p className="text-[0.93rem] leading-[1.75] text-[#9BA89F]">{b.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
