import { MailIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useInViewOnce } from "@/hooks/use-in-view-once";

export function FinalCta() {
  const navigate = useNavigate();
  const { ref, inView } = useInViewOnce<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-t border-[#2E362F] bg-ink py-20 md:py-28"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-24 top-0 h-[360px] w-[360px] rounded-full opacity-90 [background:radial-gradient(circle,rgba(29,122,70,0.24)_0%,rgba(29,122,70,0)_70%)]" />
        <div className="absolute -right-24 bottom-0 h-[320px] w-[320px] rounded-full opacity-90 [background:radial-gradient(circle,rgba(168,153,104,0.2)_0%,rgba(168,153,104,0)_70%)]" />
      </div>
      <div className="container relative mx-auto px-4">
        <div
          className={`mx-auto max-w-4xl opacity-100 motion-safe:transition-all motion-safe:ease-out motion-safe:[transition-duration:800ms] ${
            inView ? "" : "motion-safe:translate-y-10 motion-safe:opacity-0"
          }`}
        >
          <div className="group grid grid-cols-1 items-center gap-6 rounded-2xl border border-[#2E362F] border-l-[6px] border-l-green bg-[#1B211C] px-6 py-8 shadow-[0_20px_50px_rgba(0,0,0,0.35)] transition-shadow duration-300 ease-out hover:shadow-[0_24px_60px_rgba(29,122,70,0.2)] sm:grid-cols-[60px_1fr_auto] sm:gap-10 sm:px-10 sm:py-12">
            <div className="hidden h-[60px] w-[60px] items-center justify-center rounded-full bg-[color-mix(in_srgb,#1D7A46_22%,#1B211C)] transition-transform duration-300 ease-out group-hover:scale-105 sm:flex">
              <MailIcon className="h-8 w-8 text-[#4ADE80]" strokeWidth={1.5} />
            </div>

            <div>
              <h2
                className="text-[20px] leading-[1.25] tracking-[-0.01em] text-cream md:text-[24px]"
                style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 500 }}
              >
                Connect your inbox and upload your catalog.
              </h2>
              <p className="mt-3 max-w-md text-[14.5px] leading-[1.6] text-[#9BA89F] transition-colors duration-300 ease-out group-hover:text-[#C9C7B8]">
                We'll prepare your first 20 quotations at no cost.
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigate("/register")}
              className="inline-flex items-center justify-center gap-2.5 rounded-full border-[1.5px] border-green bg-green px-7 py-3.5 text-[15px] font-medium text-cream transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(29,122,70,0.45)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green active:translate-y-0 active:shadow-none sm:w-auto"
            >
              Start setup<span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
