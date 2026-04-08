import Image from "next/image";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

type Service = {
  title: string;
  description: string;
  image: string;
};

const services: Service[] = [
  {
    title: "Manage Property Listings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/services/1.png",
  },
  {
    title: "Manage Customer Bookings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/services/2.png",
  },
  {
    title: "Schedule House Cleaning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/services/3.png",
  },
  {
    title: "Monitor Guest Reviews",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/services/4.png",
  },
  {
    title: "Track & Report Expenses",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/services/5.png",
  },
  {
    title: "Guest Inquiry & Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/services/6.png",
  },
];

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
}

function ServiceCard({ title, description, image }: ServiceCardProps) {
  return (
    <Card className="h-full rounded-[10px] border border-[#f4c6d1] bg-[#f6f6f6] px-5 py-6 text-start shadow-none md:px-6 md:py-7 hover:bg-white hover:border-white">
      <Image
        src={image}
        alt={title}
        width={60}
        height={60}
        className="h-[58px] w-[58px]"
      />
      <h3 className="mt-5 max-w-[240px] text-[24px] leading-[1.12] font-extrabold tracking-[-0.02em] text-[#171717]">
        {title}
      </h3>
      <p className="mt-4 max-w-[250px] text-[14px] leading-[1.35] text-[#2f2f2f]">
        {description}
      </p>

      <Button
        variant="outline"
        className="mt-6 h-8 w-fit rounded-full border border-[#ED3C6A] px-5 text-[13px] font-medium text-[#ED3C6A]"
      >
        Read More
      </Button>
    </Card>
  );
}

function ServiceSection() {
  return (
    <section className="bg-[#eeeeee] px-4 py-12 md:py-16">
      <h2 className="mb-8 text-center text-4xl font-bold">
        Our <span className="text-[#ED3C6A]">Services</span>
      </h2>
      <p className="mx-auto max-w-5xl px-4 text-center text-lg text-[#171717] md:px-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.{" "}
      </p>

      <div className="mx-auto mt-10 grid w-full container grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-3">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </section>
  );
}

export default ServiceSection;
