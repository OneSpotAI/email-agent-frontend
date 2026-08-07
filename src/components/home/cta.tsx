import { MailIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useInViewOnce } from "@/hooks/use-in-view-once";

export function FinalCta() {
  const navigate = useNavigate();
  const { ref, inView } = useInViewOnce<HTMLElement>();

  return (
    <section
      ref={ref}
      className="border-t border-[#EEE9E0] bg-[#FCFBF7] py-28"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div
          className={`transition-all duration-700 ${
            inView ? "" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="relative overflow-hidden rounded-3xl border border-[#EEE9E0] bg-white/80 p-8 shadow-[0_18px_60px_rgba(26,26,26,0.05)] backdrop-blur-sm md:p-12">

            {/* Decorative Glow */}
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#1D7A46]/5 blur-3xl" />

            <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

              {/* Left */}
              <div className="flex items-start gap-5">

                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#EEE9E0] bg-[#FCFBF7] shadow-sm">
                  <MailIcon
                    className="h-7 w-7 text-[#1A1A1A]"
                    strokeWidth={1.6}
                  />
                </div>

                <div>
                  <h2
                    className="max-w-[14ch] text-[2rem] leading-[1.1] tracking-[-0.04em] text-[#1A1A1A] md:text-[2.5rem]"
                    style={{
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontWeight: 500,
                    }}
                  >
                    Connect your inbox and upload your catalog.
                  </h2>

                  <p className="mt-5 max-w-xl text-[16px] leading-8 text-[#666660]">
                    Start using FastQuote in minutes. We'll prepare your first
                    20 quotations at no cost so you can experience the complete
                    workflow before committing.
                  </p>
                </div>

              </div>

              {/* CTA */}
              <button
                type="button"
                onClick={() => navigate("/register")}
                className="group inline-flex items-center justify-center self-start rounded-2xl bg-[#1A1A1A] px-8 py-4 text-[15px] font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:shadow-[0_20px_40px_rgba(26,26,26,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A]/20 focus-visible:ring-offset-2"
              >
                Start setup

                <span
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}