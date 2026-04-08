import Image from "next/image";

const tools = [
  {
    id: 1,
    image: "/images/tools/tools1.png",
  },
  {
    id: 2,
    image: "/images/tools/tools2.png",
  },
  {
    id: 3,
    image: "/images/tools/tools3.png",
  },
  {
    id: 4,
    image: "/images/tools/tools4.png",
  },
  {
    id: 5,
    image: "/images/tools/tools5.png",
  },
  {
    id: 6,
    image: "/images/tools/tools6.png",
  },
  {
    id: 7,
    image: "/images/tools/tools4.png",
  },
  {
    id: 8,
    image: "/images/tools/tools5.png",
  },
  {
    id: 9,
    image: "/images/tools/tools6.png",
  },
];

export default function ToolsSection() {
  return (
    <section className="px-4 py-14 md:py-16">
      <div>
        <h2 className="mb-8 text-center text-4xl font-extrabold tracking-[-0.03em] text-[#222] md:text-5xl">
          Our <span className="text-[#ED3C6A]">Tools</span>
        </h2>
        <p className="mx-auto max-w-5xl px-4 text-center text-lg text-[#171717] md:px-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
      </div>

      <div className="mt-16 rounded-2xl bg-[#f6f6f6] px-4 py-10 sm:px-6 md:mt-20 md:py-12">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="group flex h-[139px] items-center justify-center rounded-xl border border-[#ececec] bg-white px-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#f3d4de] hover:shadow-[0_25px_45px_rgba(17,24,39,0.10)]"
            >
              <Image
                src={tool.image}
                alt={`Tool ${tool.id}`}
                width={300}
                height={150}
                className="h-auto max-h-14 w-[190px] object-contain transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
