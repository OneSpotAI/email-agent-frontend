import { UserCheck, Lock, History, ShieldCheck } from "lucide-react";
import { useInViewOnce } from "@/hooks/use-in-view-once";
import { ApprovalIllustration } from "./trust-illustration";

const POINTS = [
  {
    icon: UserCheck,
    title: "Human Approval",
    description:
      "Every quotation is reviewed before sending. AI prepares the draft, while your team approves every response.",
  },
  {
    icon: Lock,
    title: "Private by Default",
    description:
      "Your catalog, inbox, and customer data remain secure within your workspace at every stage of processing.",
  },
  {
    icon: History,
    title: "Complete Audit Trail",
    description:
      "Every quotation, approval, edit, and customer interaction is logged with a searchable history for accountability.",
  },
  {
    icon: ShieldCheck,
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
      className="border-t border-[#2E362F] bg-ink py-16 md:py-24"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <div className="container mx-auto px-4">
        <div
          className={`mx-auto flex max-w-xl flex-col items-center gap-3 text-center opacity-100 motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
            inView ? "" : "motion-safe:-translate-x-10 motion-safe:opacity-0"
          }`}
        >
          <ApprovalIllustration className="h-24 w-28" />
          <h2
            className="text-[1.75rem] font-semibold leading-[1.15] tracking-[-0.5px] text-cream md:text-[2.5rem]"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Built for Enterprise Reliability
          </h2>
        </div>

        <div className="relative mx-auto mt-16 max-w-[1000px]">
          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            {POINTS.map((p, idx) => (
              <div
                key={p.title}
                className={`opacity-100 motion-safe:transition-all motion-safe:ease-out motion-safe:[transition-duration:800ms] ${
                  inView ? "" : "motion-safe:translate-y-10 motion-safe:opacity-0"
                }`}
                style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
              >
                <div
                  className="group flex h-full min-h-[180px] flex-col rounded-2xl border border-[#2E362F] bg-[#1B211C] p-6 transition-all duration-[350ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:-translate-y-1 hover:border-green hover:shadow-[0_16px_40px_rgba(29,122,70,0.2)]"
                >
                  <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[color-mix(in_srgb,#1D7A46_20%,#1B211C)] text-[#4ADE80] transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-green group-hover:text-cream">
                    <p.icon className="h-4.5 w-4.5" strokeWidth={1.75} />
                  </span>
                  <h3 className="mb-3 text-[19px] font-medium text-cream" style={{ fontFamily: "'Fraunces', Georgia, serif" }}>
                    {p.title}
                  </h3>
                  <p className="text-[14.5px] leading-[1.7] text-[#9BA89F]">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
