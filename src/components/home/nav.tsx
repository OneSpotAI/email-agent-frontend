import { FileTextIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export function HomeNav() {
  const navigate = useNavigate();

  return (
    <header
      className="border-b border-[#2E362F] bg-ink"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border-[1.5px] border-green text-green">
            <FileTextIcon className="h-4 w-4" />
          </div>
          <span
            className="text-[17px] tracking-tight text-cream"
            style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 500 }}
          >
            FastQuote
          </span>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/signin" className="text-[13px] font-medium text-[#9BA89F] hover:text-cream">
            Sign in
          </Link>
          <button
            type="button"
            onClick={() => navigate("/register")}
            className="inline-flex items-center rounded-full border-[1.5px] border-green bg-green px-3.5 py-1.5 text-[12px] font-semibold text-cream transition-transform hover:-translate-y-px"
          >
            Get started
          </button>
        </div>
      </div>
    </header>
  );
}
