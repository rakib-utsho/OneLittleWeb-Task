"use client";

import agoda from "@/assets/images/agoda.png";
import airbnbImg from "@/assets/images/airbnb.png";
import bookingImg from "@/assets/images/booking.png";
import expedia from "@/assets/images/expedia.png";
import hometogo from "@/assets/images/home.png";
import triadvisor from "@/assets/images/tripadvisor.png";
import vrbo from "@/assets/images/vrbo.png";
import Image, { type StaticImageData } from "next/image";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type TrustedBrand = {
  key: string;
  label: string;
  image: StaticImageData;
};

const trustedBrands: TrustedBrand[] = [
  {
    key: "airbnb",
    label: "airbnb",
    image: airbnbImg,
  },
  {
    key: "booking",
    label: "Booking.com",
    image: bookingImg,
  },
  {
    key: "vrbo",
    label: "Vrbo",
    image: vrbo,
  },
  {
    key: "tripadvisor",
    label: "Tripadvisor",
    image: triadvisor,
  },
  {
    key: "agoda",
    label: "agoda",
    image: agoda,
  },
  {
    key: "expedia",
    label: "Expedia",
    image: expedia,
  },
  {
    key: "hometogo",
    label: "home to go",
    image: hometogo,
  },
];

function TrustedBrandsSection() {
  return (
    <section aria-label="Trusted by leading brands">
      <div className="flex justify-center px-4 py-6 mt-10">
        <h2 className="m-0 text-center text-[30px] leading-[1.2] font-bold text-[#171717] md:text-[31px]">
          Trusted by leaders in 50+ industries
        </h2>
      </div>

      <div className="bg-[#F6F6F6] px-2 py-2 md:px-6">
        <Swiper
          modules={[Autoplay]}
          loop
          speed={700}
          autoplay={{
            delay: 1600,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={10}
          breakpoints={{
            0: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
            1280: { slidesPerView: 7 },
          }}
        >
          {trustedBrands.map((brand, index) => (
            <SwiperSlide key={brand.key}>
              <div className="flex min-h-20.5 items-center justify-center rounded-md px-3">
                <div className="flex h-12 w-37.5 items-center justify-center">
                  <Image
                    src={brand.image}
                    alt={brand.label}
                    className="h-full w-full object-contain"
                    sizes="(min-width: 1280px) 10vw, (min-width: 768px) 14vw, 42vw"
                    priority={index < 3}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default TrustedBrandsSection;
