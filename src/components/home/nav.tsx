import { FileTextIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export function HomeNav() {
  const navigate = useNavigate();

  return (
    <header
      className="sticky top-0 z-50 border-b border-[#EEE9E0] bg-[#FCFBF7]/90 backdrop-blur-md"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-5 md:h-[68px] md:px-6 lg:px-8">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#EEE9E0] bg-white shadow-sm transition-all duration-300 hover:shadow-md">
            <FileTextIcon
              className="h-4 w-4 text-[#1A1A1A]"
              strokeWidth={1.8}
            />
          </div>

          <span
            className="text-[1.55rem] font-medium tracking-[-0.02em] text-[#1A1A1A] md:text-[1.65rem]"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            FastQuote
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">

          <Link
            to="/signin"
            className="hidden rounded-md px-2 py-1 text-sm font-medium text-[#71716A] transition-colors duration-300 hover:text-[#1A1A1A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A]/20 focus-visible:ring-offset-2 lg:block"
          >
            Sign in
          </Link>

          <button
            type="button"
            aria-label="Get started"
            onClick={() => navigate("/register")}
            className="inline-flex items-center justify-center rounded-2xl bg-[#1A1A1A] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-[0_20px_40px_rgba(26,26,26,0.18)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A]/20 focus-visible:ring-offset-2"
          >
            Get started
          </button>

        </div>
      </div>
    </header>
  );
}