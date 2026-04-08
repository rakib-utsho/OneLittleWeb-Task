import Image from "next/image";

const steps = [
  {
    id: "01",
    title: "Add requirements & sign up today",
    icon: "/images/img1.png",
  },
  {
    id: "02",
    title: "Connect with your CSM & onboarding team",
    icon: "/images/img2.png",
  },
  {
    id: "03",
    title: "Meet your STR Assistant next week",
    icon: "/images/img3.png",
  },
];

function GetStartedSection() {
  return (
    <section className="bg-[#f6f6f6] px-4 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-4xl font-extrabold tracking-[-0.03em] text-[#171717] md:text-5xl">
          Getting Started is <span className="text-[#ED3C6A]">Easy</span>
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-6 text-[#2f2f2f]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-5">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article key={step.id} className="relative">
                <span className="absolute -left-3 -top-3 z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#ED3C6A] bg-[#f6f6f6] text-2xl font-medium leading-none text-[#171717]">
                  {step.id}
                </span>

                <div className="flex h-[132px] items-center justify-center rounded-md border border-[#ecdce2] bg-[#f6f6f6]">
                  <div className="relative">
                    <Image
                      src={step.icon}
                      alt={`Step ${step.id}`}
                      width={100}
                      height={100}
                    />
                  </div>
                </div>

                <p className="mx-auto mt-5 max-w-[220px] text-center text-[28px] leading-[1.15] font-semibold tracking-[-0.01em] text-[#171717]">
                  {step.title}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default GetStartedSection;
