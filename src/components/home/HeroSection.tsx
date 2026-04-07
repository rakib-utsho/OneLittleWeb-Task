import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { SiAirbnb, SiTripadvisor } from "react-icons/si";

import { Button } from "@/components/ui/button";

type HeroBrandTileProps = {
  className: string;
  children: ReactNode;
};

function HeroBrandTile({ className, children }: HeroBrandTileProps) {
  return (
    <div aria-hidden="true" className={`hero-brand-tile ${className}`}>
      {children}
    </div>
  );
}

function HeroDot({ className }: { className: string }) {
  return <span aria-hidden="true" className={`hero-dot ${className}`} />;
}

function HeroSection() {
  return (
    <section className="hero-shell">
      <div className="hero-stage">
        <HeroDot className="hero-dot-blue" />
        <HeroDot className="hero-dot-red" />
        <HeroDot className="hero-dot-gold-small" />
        <HeroDot className="hero-dot-green-top" />
        <HeroDot className="hero-dot-cyan-bottom" />
        <HeroDot className="hero-dot-gold-right" />
        <HeroDot className="hero-dot-navy-right" />

        <HeroBrandTile className="hero-airbnb-tile">
          <div className="flex flex-col items-center justify-center text-white">
            <SiAirbnb className="h-9 w-9" />
            <span className="hero-airbnb-label">airbnb</span>
          </div>
        </HeroBrandTile>

        <HeroBrandTile className="hero-booking-tile">
          <div className="relative flex h-full w-full items-center justify-center text-white">
            <span className="hero-booking-letter">B</span>
            <span className="hero-booking-dot" />
          </div>
        </HeroBrandTile>

        <HeroBrandTile className="hero-abstract-tile">
          <div className="relative h-full w-full overflow-hidden rounded-[18px]">
            <span className="hero-abstract-stripe hero-abstract-stripe-one" />
            <span className="hero-abstract-stripe hero-abstract-stripe-two" />
            <span className="hero-abstract-stripe hero-abstract-stripe-three" />
          </div>
        </HeroBrandTile>

        <HeroBrandTile className="hero-tripadvisor-tile">
          <div className="flex h-full w-full items-center justify-center text-[#0f222b]">
            <SiTripadvisor className="h-9 w-9" />
          </div>
        </HeroBrandTile>

        <div className="hero-content-shell relative z-10 mx-auto flex h-full flex-col items-center justify-center px-6 text-center">
          <div className="bg-white/75 p-4 sm:p-8 md:p-12 lg:p-16 rounded-full">
            <h1 className="hero-title">Airbnb Assistants For</h1>
            <p className="hero-subtitle">Property Management</p>

            <p className="hero-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className="mt-9 flex flex-col items-center gap-5">
              <Button asChild className="hero-primary-button">
                <Link href="#meeting">
                  Schedule A Meeting
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Link
                href="#pricing"
                className="text-[14px] font-medium text-black underline underline-offset-4 transition-opacity hover:opacity-70"
              >
                See Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
