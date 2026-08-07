import { useNavigate } from "react-router-dom";
import { HeroWorkflowTimeline } from "./hero-workflow-timeline";
import { HeroBusinessImpact } from "./hero-business-impact";
import { useInViewOnce } from "@/hooks/use-in-view-once";

export function Hero() {
  const navigate = useNavigate();
  const { ref, inView } = useInViewOnce<HTMLDivElement>();

  return (
    <section
      className="bg-[#FCFBF7] py-20 md:py-28"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <div className="container mx-auto px-6 lg:px-8">

        <div
          ref={ref}
          className={`max-w-[760px] transition-all duration-700 ease-out ${
            inView
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          <h1
            className="max-w-[12ch] text-[3rem] leading-[0.95] tracking-[-0.055em] text-[#1A1A1A] sm:text-[3.75rem] lg:text-[4.2rem]"
            style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontWeight: 400,
            }}
          >
            Enterprise Quoting.
            <br />
            Automated.
          </h1>

          <p className="mt-7 max-w-[620px] text-[18px] leading-8 text-[#5B5B55] lg:text-[19px]">
            FastQuote prepares complete quotations from incoming RFQs using
            your catalog, pricing, and branding.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => navigate("/register")}
              className="group inline-flex items-center gap-2 rounded-2xl bg-[#1A1A1A] px-7 py-3.5 text-[15px] font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-[0_20px_40px_rgba(26,26,26,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A]/30 focus-visible:ring-offset-2"
            >
              Get started

              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </button>
          </div>
        </div>

        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-[#DDD8CC] to-transparent" />

        <HeroWorkflowTimeline />

        <div className="mt-24">
          <HeroBusinessImpact />
        </div>

      </div>
    </section>
  );
}