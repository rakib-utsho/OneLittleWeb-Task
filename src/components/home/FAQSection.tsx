"use client";

import { MinusCircle, PlusCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    id: 2,
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan anytime from your account settings with no hassle.",
  },
  {
    id: 3,
    question: "What is your cancellation policy?",
    answer:
      "You can cancel your subscription whenever you want, and your plan remains active until the end of the current billing cycle.",
  },
  {
    id: 4,
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, you can add business details, tax information, and custom notes directly from your billing profile.",
  },
  {
    id: 5,
    question: "How does billing work?",
    answer:
      "Billing is automatic and recurring based on your selected plan, and invoices are generated at the start of each cycle.",
  },
  {
    id: 6,
    question: "How do I change my account email?",
    answer:
      "Go to profile settings, update your email, and confirm the change through the verification link sent to your new address.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number>(1);

  return (
    <section className="px-4 py-10 md:py-14">
      <div className="mx-auto max-w-6xl rounded-xl bg-[#F9FAFB] px-6 py-12 md:px-12 md:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-extrabold tracking-[-0.02em] text-[#1F2937] md:text-5xl">
            Frequently asked <span className="text-[#ED3C6A]">questions</span>
          </h2>
          <p className="mt-4 text-[16px] text-[#2f2f2f]">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div key={item.id} className="border-b border-[#f0cad6] py-5">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? 0 : item.id)}
                  className="flex w-full cursor-pointer items-start justify-between gap-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[16px] leading-[1.2] font-extrabold text-[#111827] md:text-[20px]">
                    {item.question}
                  </span>
                  <span className="pt-1 text-[#ED3C6A]">
                    {isOpen ? (
                      <MinusCircle className="h-6 w-6" />
                    ) : (
                      <PlusCircle className="h-6 w-6" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <p className="mt-3 max-w-3xl pr-8 text-[14px] leading-6 text-[#6B7280] md:text-[15px]">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mx-auto mt-5 max-w-6xl rounded-xl bg-[#F9FAFB] px-6 py-10 md:px-12 md:py-12">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <div className="relative h-11 w-23">
            <span className="absolute left-0 top-1 z-10 flex h-10 w-10 items-center justify-center rounded-full text-[11px] font-bold text-[#1f2937]">
              <Image
                src="/images/tt3.png"
                alt="User 1"
                width={40}
                height={40}
              />
            </span>
            <span className="absolute left-1/2 top-0 z-20 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full text-[11px] font-bold text-white">
              <Image
                src="/images/tt1.png"
                alt="User 2"
                width={40}
                height={40}
              />
            </span>
            <span className="absolute right-0 top-1 z-10 flex h-10 w-10 items-center justify-center rounded-full text-[11px] font-bold text-[#1f2937]">
              <Image
                src="/images/tt2.png"
                alt="User 3"
                width={40}
                height={40}
              />
            </span>
          </div>

          <h3 className="mt-4 text-[28px] leading-tight font-extrabold text-[#1f2937] md:text-[32px]">
            Still have Questions?
          </h3>
          <p className="mt-3 text-[15px] text-[#9CA3AF] md:text-base">
            Can&apos;t find the answer you&apos;re looking for? Please chat to
            our friendly team.
          </p>

          <Button asChild className="hero-primary-button mt-6 px-7">
            <Link href="#contact">Get in touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
