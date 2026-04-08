"use client";

import arroawImage from "@/assets/graph.png";
import { Check, X } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

type BillingCycle = "monthly" | "yearly";

type Plan = {
  name: string;
  subtitle: string;
  monthlyPrice: number;
  highlighted?: boolean;
  features: { label: string; included: boolean }[];
};

const YEARLY_DISCOUNT = 0.25;

const plans: Plan[] = [
  {
    name: "Freebie",
    subtitle: "Ideal for individuals who need quick access to basic features.",
    monthlyPrice: 0,
    features: [
      { label: "20,000+ of PNG & SVG graphics", included: true },
      { label: "Access to 100 million stock images", included: true },
      { label: "Upload custom icons and fonts", included: false },
      { label: "Unlimited Sharing", included: false },
      { label: "Upload graphics & video in up to 4k", included: false },
      { label: "Unlimited Projects", included: false },
      { label: "Instant Access to our design system", included: false },
      { label: "Create teams to collaborate on designs", included: false },
    ],
  },
  {
    name: "Professional",
    subtitle:
      "Ideal for individuals who need advanced features and tools for client work.",
    monthlyPrice: 25,
    highlighted: true,
    features: [
      { label: "20,000+ of PNG & SVG graphics", included: true },
      { label: "Access to 100 million stock images", included: true },
      { label: "Upload custom icons and fonts", included: true },
      { label: "Unlimited Sharing", included: true },
      { label: "Upload graphics & video in up to 4k", included: true },
      { label: "Unlimited Projects", included: true },
      { label: "Instant Access to our design system", included: false },
      { label: "Create teams to collaborate on designs", included: false },
    ],
  },
  {
    name: "Enterprise",
    subtitle:
      "Ideal for businesses who need personalized services and security for large teams.",
    monthlyPrice: 100,
    features: [
      { label: "20,000+ of PNG & SVG graphics", included: true },
      { label: "Access to 100 million stock images", included: true },
      { label: "Upload custom icons and fonts", included: true },
      { label: "Unlimited Sharing", included: true },
      { label: "Upload graphics & video in up to 4k", included: true },
      { label: "Unlimited Projects", included: true },
      { label: "Instant Access to our design system", included: true },
      { label: "Create teams to collaborate on designs", included: true },
    ],
  },
];

function formatPrice(value: number) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(value);
}

function PriceSection() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  const isYearly = billingCycle === "yearly";

  const pricedPlans = useMemo(() => {
    return plans.map((plan) => {
      const yearly = plan.monthlyPrice * 12 * (1 - YEARLY_DISCOUNT);

      return {
        ...plan,
        displayPrice: isYearly ? yearly : plan.monthlyPrice,
      };
    });
  }, [isYearly]);

  return (
    <section id="pricing" className="bg-[#ffff] px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-4xl font-extrabold tracking-[-0.03em] text-[#222] md:text-5xl">
          Airbnb Assistant <span className="text-[#ed3c6a]">pricing</span>
        </h2>

        <p className="mt-2 text-center text-xl text-[#444]">
          Choose a plan that&apos;s right for you
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
          <span
            className={`text-sm font-medium transition-colors ${
              isYearly ? "text-[#9aa0aa]" : "text-[#222]"
            }`}
          >
            Pay Monthly
          </span>

          <button
            type="button"
            role="switch"
            aria-label="Toggle yearly billing"
            aria-checked={isYearly}
            onClick={() => setBillingCycle(isYearly ? "monthly" : "yearly")}
            className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ed3c6a]/40 ${
              isYearly
                ? "border-[#ed3c6a] bg-[#ed3c6a]"
                : "border-[#b8bcc6] bg-[#c7cbd3]"
            }`}
          >
            <span
              className={`absolute left-0.5 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-white shadow-[0_1px_3px_rgba(0,0,0,0.25)] transition-transform duration-300 ${
                isYearly ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>

          <span
            className={`text-sm font-medium transition-colors ${
              isYearly ? "text-[#222]" : "text-[#9aa0aa]"
            }`}
          >
            Pay Yearly
          </span>

          <div className="relative h-18 w-37.5 shrink-0">
            <Image
              src={arroawImage}
              alt="Arrow pointing to the yearly option"
              fill
              className="object-contain"
              priority
            />
            <span className="absolute left-28.75 top-9.5 whitespace-nowrap text-base font-semibold text-[#ed3c6a]">
              Save 25%
            </span>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-3">
          {pricedPlans.map((plan) => {
            const featured = !!plan.highlighted;

            return (
              <article
                key={plan.name}
                className={`rounded-lg border p-4 md:p-5 ${
                  featured
                    ? "border-[#ed3c6a] bg-[#ed3c6a] text-white"
                    : "border-[#f1c5d0] bg-[#f3f3f3] text-[#232323]"
                }`}
              >
                <h3 className="text-[42px] leading-none font-semibold tracking-[-0.02em]">
                  {plan.name}
                </h3>

                <p
                  className={`mt-2 text-xs leading-[1.35] ${
                    featured ? "text-[#ffe4ee]" : "text-[#6f6f6f]"
                  }`}
                >
                  {plan.subtitle}
                </p>

                <div className="mt-5 flex items-baseline gap-1.5">
                  <span className="text-[52px] leading-none font-semibold tracking-[-0.03em]">
                    ${formatPrice(plan.displayPrice)}
                  </span>
                  <span
                    className={`text-base ${
                      featured ? "text-[#ffe4ee]" : "text-[#6f6f6f]"
                    }`}
                  >
                    /{isYearly ? "Year" : "Month"}
                  </span>
                </div>

                <button
                  type="button"
                  className={`mt-6 h-9 w-full rounded-md border text-lg font-medium transition-colors ${
                    featured
                      ? "border-white bg-white text-[#ed3c6a] hover:bg-[#fff5f8]"
                      : "border-[#ed3c6a] bg-transparent text-[#ed3c6a] hover:bg-[#fff1f5]"
                  }`}
                >
                  Get Started Now
                </button>

                <ul
                  className={`mt-5 space-y-2.5 border-t pt-5 ${featured ? "border-[#f56b90]" : "border-[#e6e6e6]"}`}
                >
                  {plan.features.map((feature) => (
                    <li
                      key={feature.label}
                      className="flex items-start gap-2.5 text-[14px] leading-[1.35]"
                    >
                      <span
                        className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          feature.included
                            ? featured
                              ? "bg-[#ffd2df] text-[#ed3c6a]"
                              : "bg-[#ffd8e3] text-[#ed3c6a]"
                            : featured
                              ? "bg-white text-[#9ca3af]"
                              : "bg-[#eceff4] text-[#9ca3af]"
                        }`}
                      >
                        {feature.included ? (
                          <Check className="h-3 w-3" />
                        ) : (
                          <X className="h-3 w-3" />
                        )}
                      </span>

                      <span
                        className={
                          featured
                            ? feature.included
                              ? "text-white"
                              : "text-[#ffe0ea]"
                            : feature.included
                              ? "text-[#2f2f2f]"
                              : "text-[#a3afbf]"
                        }
                      >
                        {feature.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PriceSection;
