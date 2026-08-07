import { HomeNav } from "./nav";
import { Hero } from "./hero";
import { HowItWorks } from "./how-it-works";
import { Trust } from "./trust";
import { Benefits } from "./benefits";
import { FinalCta } from "./cta";

export function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FCFBF7] text-[#1A1A1A]">
      <HomeNav />
      <Hero />
      <HowItWorks />
      <Trust />
      <Benefits />
      <FinalCta />
    </main>
  );
}