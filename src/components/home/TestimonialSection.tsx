"use client";

import { Star } from "lucide-react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type Testimonial = {
  id: number;
  name: string;
  feedback: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jenny Wilson",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: "https://i.pravatar.cc/120?img=32",
  },
  {
    id: 2,
    name: "Esther Howard",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: "https://i.pravatar.cc/120?img=15",
  },
  {
    id: 3,
    name: "Robert Fox",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: "https://i.pravatar.cc/120?img=11",
  },
  {
    id: 4,
    name: "Courtney Henry",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: "https://i.pravatar.cc/120?img=23",
  },
];

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="group min-h-39.5 rounded-xl bg-[#F6F6F6] px-6 py-9  duration-300  hover:bg-white md:px-7">
      <div className="flex items-center gap-5">
        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.avatar}
            alt={item.name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <div>
          <h3 className="text-[20px] leading-none font-extrabold tracking-[-0.02em] text-[#171717]">
            {item.name}
          </h3>
          <p className="mt-2  text-[14px] leading-[1.45] text-[#2f2f2f]">
            {item.feedback}
          </p>

          <div className="mt-3 flex items-center gap-1">
            {Array.from({ length: 4 }).map((_, index) => (
              <Star
                key={index}
                className="h-3.5 w-3.5 fill-[#F89A2D] text-[#F89A2D]"
              />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function TestimonialSection() {
  return (
    <section className="overflow-hidden py-14 md:py-18">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-[32px] font-extrabold text-[#171717] md:text-5xl">
          Check Our Clients <span className="text-[#ED3C6A]">Review</span>
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-[15px] leading-6 text-[#2f2f2f]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className="mt-12">
        <Swiper
          className="testimonial-swiper"
          modules={[Autoplay]}
          loop
          speed={750}
          centeredSlides
          spaceBetween={18}
          autoplay={{
            delay: 2400,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.08,
              centeredSlides: false,
            },
            768: {
              slidesPerView: 1.85,
            },
            1024: {
              slidesPerView: 2.45,
            },
            1280: {
              slidesPerView: 2.85,
            },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} className="h-auto pb-2">
              <TestimonialCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}