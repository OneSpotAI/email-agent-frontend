import { useNavigate } from "react-router-dom";
import { HeroWorkflowTimeline } from "./hero-workflow-timeline";
import { HeroBusinessImpact } from "./hero-business-impact";
import { HeroQuotePreview } from "./hero-quote-preview";
import { HeroFlowIllustration } from "./hero-flow-illustration";
import { useInViewOnce } from "@/hooks/use-in-view-once";

export function Hero() {
  const navigate = useNavigate();
  const { ref, inView } = useInViewOnce<HTMLDivElement>();

  return (
    <section
      className="relative overflow-hidden bg-ink px-4 py-11 md:py-24"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full opacity-90 [background:radial-gradient(circle,rgba(29,122,70,0.30)_0%,rgba(29,122,70,0)_70%)]" />
        <div className="absolute -left-40 top-1/3 h-[400px] w-[400px] rounded-full opacity-80 [background:radial-gradient(circle,rgba(168,153,104,0.22)_0%,rgba(168,153,104,0)_70%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(#FCFBF7_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
        <HeroFlowIllustration />
      </div>
      <div className="container relative mx-auto">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div
            ref={ref}
            className={`opacity-100 motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out ${
              inView ? "" : "motion-safe:-translate-x-10 motion-safe:opacity-0"
            }`}
          >
            <h1
              className="max-w-[20ch] text-[2.5rem] leading-[1.0] tracking-[-0.02em] text-cream md:text-[4.25rem]"
              style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 400 }}
            >
              Enterprise Quoting.{" "}
              <span
                className="inline-block bg-clip-text text-transparent motion-safe:animate-[hero-shimmer_5s_linear_infinite]"
                style={{
                  backgroundImage: "linear-gradient(90deg, #4ADE80 0%, #D4C89A 25%, #4ADE80 50%, #D4C89A 75%, #4ADE80 100%)",
                  backgroundSize: "300% auto",
                }}
              >
                Automated.
              </span>
            </h1>
            <p
              className="mt-5 max-w-[44ch] text-[17px] italic leading-[1.5] text-[#B8B6A8] md:text-[20px]"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              FastQuote prepares complete quotations from incoming RFQs using your
              catalog, pricing, and branding.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <button
                type="button"
                onClick={() => navigate("/register")}
                className="inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-green bg-green px-6 py-3.5 text-[15px] font-medium text-cream transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(29,122,70,0.45)]"
              >
                Get started<span aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          <HeroQuotePreview />
        </div>

        <HeroWorkflowTimeline />
        <HeroBusinessImpact />
      </div>

      <style>{`
        @keyframes hero-shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 300% center; }
        }
        @media (prefers-reduced-motion: reduce) {
          .motion-safe\\:animate-\\[hero-shimmer_5s_linear_infinite\\] { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
