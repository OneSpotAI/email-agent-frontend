import { Mail, Calculator, CheckCircle2 } from "lucide-react";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { AgentIllustration } from "./agent-illustration";

const STEPS = [
  {
    n: "01",
    icon: Mail,
    title: "RFQ Processing",
    description:
      "Monitors your inbox, understands complex requests, extracts requirements from unstructured data with high accuracy.",
  },
  {
    n: "02",
    icon: Calculator,
    title: "Intelligent Pricing",
    description:
      "Understands requirements, matches products across complex catalogs, asks clarifying questions, and generates accurate pricing.",
  },
  {
    n: "03",
    icon: CheckCircle2,
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
      className="border-t border-[#2E362F] bg-ink py-16 md:py-24"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <div className="container mx-auto px-4">
        <div
          className={`mx-auto flex max-w-2xl flex-col items-center gap-4 text-center opacity-100 motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
            inView ? "" : "motion-safe:-translate-x-10 motion-safe:opacity-0"
          }`}
        >
          <AgentIllustration className="h-24 w-24" />
          <h2
            className="text-[1.75rem] font-semibold leading-[1.15] tracking-[-0.5px] text-cream md:text-[2.5rem]"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            How It Works
          </h2>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-12">
          {STEPS.map((s, idx) => (
            <div
              key={s.n}
              className={`opacity-100 motion-safe:transition-all motion-safe:ease-out motion-safe:[transition-duration:800ms] ${
                inView ? "" : "motion-safe:translate-y-10 motion-safe:opacity-0"
              }`}
              style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
            >
              <div className="group flex h-full flex-col rounded-2xl border border-[#2E362F] bg-[#1B211C] p-6 transition-all duration-[350ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:-translate-y-1 hover:border-green hover:shadow-[0_16px_40px_rgba(29,122,70,0.2)]">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[color-mix(in_srgb,#1D7A46_20%,#1B211C)] text-[#4ADE80] transition-all duration-300 ease-out motion-safe:group-hover:scale-110 group-hover:bg-green group-hover:text-cream">
                    <s.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="font-mono text-[13px] font-semibold text-[#8C8A7F]">{s.n}</span>
                </div>
                <h3
                  className="mt-6 text-[19px] text-cream"
                  style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 500 }}
                >
                  {s.title}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-[1.6] text-[#9BA89F]">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
