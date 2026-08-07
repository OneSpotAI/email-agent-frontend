import { useEffect, useRef, useState } from "react";

const STEPS = [
  {
    actor: "Agent",
    label: "Reads the email",
  },
  {
    actor: "Agent",
    label: "Matches your catalog",
  },
  {
    actor: "Agent",
    label: "Drafts the quotation",
  },
  {
    actor: "You",
    label: "Review and Approve",
    you: true,
  },
  {
    actor: "Agent",
    label: "Shares the quotation",
  },
];

const HOLD = [2400, 3000, 3200, 3200, 3400];

export function HeroWorkflowTimeline() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(true);

  const railRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = railRef.current;

    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (paused || !visible) return;

    const timer = setTimeout(() => {
      setCurrent((v) => (v + 1) % STEPS.length);
    }, HOLD[current]);

    return () => clearTimeout(timer);
  }, [current, paused, visible]);

  const progress = (current / (STEPS.length - 1)) * 100;

  return (
    <section
      ref={railRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="mt-16 rounded-3xl border border-[#EEE9E0] bg-white/70 px-6 py-8 shadow-[0_18px_60px_rgba(26,26,26,0.05)] backdrop-blur-sm"
    >
      {/* ========================= */}
      {/* MOBILE */}
      {/* ========================= */}

      <div className="space-y-8 lg:hidden">
        {STEPS.map((step, index) => {
          const active = index === current;
          const done = index < current;

          return (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              className="flex w-full items-start gap-4 bg-transparent text-left"
            >
              <div className="flex flex-col items-center">
                <span
                  className="relative h-[15px] w-[15px] rounded-full border-2 transition-all duration-500"
                  style={{
                    borderColor:
                      active || done ? "#1A1A1A" : "#DAD5C8",
                    background:
                      step.you
                        ? "#FCFBF7"
                        : active || done
                        ? "#1A1A1A"
                        : "#FCFBF7",
                    transform: active ? "scale(1.15)" : "scale(1)",
                  }}
                >
                  {active && index !== STEPS.length - 1 && (
                    <span className="absolute -inset-2 animate-[qa-ring_2.4s_ease-out_infinite] rounded-full border border-[#1A1A1A]" />
                  )}
                </span>

                {index !== STEPS.length - 1 && (
                  <span className="mt-2 h-12 w-[2px] bg-[#E8E2D7]" />
                )}
              </div>

              <div className="pb-4">
                <p
                  className="font-mono text-[10px] uppercase tracking-[0.18em]"
                  style={{
                    color: active ? "#1A1A1A" : "#9A998F",
                  }}
                >
                  {step.actor}
                </p>

                <h4
                  className="mt-2 text-[17px] leading-6 transition-all duration-500"
                  style={{
                    color: active ? "#1A1A1A" : "#666666",
                    fontWeight: active ? 600 : 500,
                  }}
                >
                  {step.label}
                </h4>
              </div>
            </button>
          );
        })}
      </div>

      {/* ========================= */}
      {/* DESKTOP */}
      {/* ========================= */}

      <div className="relative hidden lg:block">
        <div className="absolute left-0 right-0 top-[7px] h-[2px] rounded-full bg-[#E8E2D7]" />

        <div
          className="absolute left-0 top-[7px] h-[2px] rounded-full bg-[#1A1A1A] "
          style={{  
  width: `${progress}%`,
  transition: "width 650ms cubic-bezier(.2,.7,.3,1)",
}}
        />

        <div className="relative grid grid-cols-5">
                  {STEPS.map((step, index) => {
          const active = index === current;
          const done = index < current;

          return (
            <button
              key={index}
              type="button"
              onClick={() => {
  setPaused(true);
  setCurrent(index);

  setTimeout(() => {
    setPaused(false);
  }, 300);
}}
              className="flex flex-col items-center justify-start rounded-xl bg-transparent hover:-translate-y-1 text-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A]/20"
            >
              <span
                className="relative z-10 h-4 w-4 rounded-full border-2 transition-all duration-500"
                style={{
                  borderColor:
                    active || done ? "#1A1A1A" : "#DAD5C8",
                  background: step.you
                    ? "#FCFBF7"
                    : active || done
                    ? "#1A1A1A"
                    : "#FCFBF7",
                  transform: active ? "scale(1.15)" : "scale(1)",
                }}
              >
                {active && index !== STEPS.length - 1 && (
                  <span className="absolute -inset-2 animate-[qa-ring_2.6s_cubic-bezier(.2,.7,.3,1)_infinite] rounded-full border border-[#1A1A1A]" />
                )}
              </span>

              <div className="mt-8 flex w-full flex-col items-center">
                <p
                  className="font-mono text-[10px] uppercase tracking-[0.18em] transition-colors duration-500"
                  style={{
                    color: active ? "#1A1A1A" : "#9A998F",
                  }}
                >
                  {step.actor}
                </p>

                <h4
                  className="mt-2 max-w-[160px] text-[15px] leading-6 transition-all duration-500"
                  style={{
                    color:
  active
    ? "#1A1A1A"
    : done
    ? "#4A4A45"
    : "#8A8A84" ,
                    fontWeight: active ? 600 : 500,
                  }}
                >
                  {step.label}
                </h4>
              </div>
            </button>
          );
        })}
      </div>
      </div>

      <style>{`
        @keyframes qa-ring {
          0% {
            transform: scale(.6);
            opacity: .45;
          }

          70% {
            transform: scale(1.2);
            opacity: 0;
          }

          100% {
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-\\[qa-ring_2\\.4s_ease-out_infinite\\] {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}