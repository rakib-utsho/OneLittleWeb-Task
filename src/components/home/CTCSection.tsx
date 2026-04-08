import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const reason = [
  {
    id: "01",
    title: "Brilliant Client Service",
  },
  {
    id: "02",
    title: "Flexibility & Adaptability",
  },
  {
    id: "03",
    title: "We make it Personal",
  },
  {
    id: "04",
    title: "We have expert in our team",
  },
];

export default function CTCSection() {
  return (
    <section className="mt-10 px-4 pb-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto rounded-[28px] border border-[#c6b8be] bg-[#FDEBF0] px-6 py-8 md:px-10 md:py-10 lg:px-14">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-12">
          <div className="w-full max-w-130">
            <h2 className="w-full max-w-102.5 text-4xl font-bold">
            Few Reasons Why you Choose us?
            </h2>
            <p className="mt-4 w-full max-w-125 font-bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation{" "}
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {reason.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <div className="rounded-full bg-[#FAC4D2] p-2">
                    <Check className="text-[#ED3C6A]" />
                  </div>
                  <h3 className="font-bold">{item.title}</h3>
                </div>
              ))}
            </div>

            <Button asChild className="hero-primary-button mt-8">
              <Link href="#meeting">
                Schedule A Meeting
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="flex w-full max-w-155 shrink-0 items-center justify-center self-center">
            <Image
              src="/images/ctc.png"
              alt="CTC"
              width={600}
              height={800}
              className="mx-auto h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
