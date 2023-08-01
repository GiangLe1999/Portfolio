import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";

import {
  RxArrowTopRight,
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
} from "react-icons/rx";

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "SEO",
    description:
      "Seo service will improve your website visibility, gain more traffic.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description:
      "Looking for Graphic Design Services? Maybe I'm your right choice.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description:
      "I can build few kinds of website, such as E-Commerce, Blog...",
  },
  {
    icon: <RxReader />,
    title: "Copywriting",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={
        ({ 320: { slidesPerView: 1, spaceBetween: 15 } },
        { 640: { slidesPerView: 3, spaceBetween: 15 } })
      }
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div
            className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 
          sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)]
          transition-all duration-300"
          >
            {/* Icon */}
            <div className="text-4xl text-accent mb-4">{item.icon}</div>

            {/* Title & Desc */}
            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>

            {/* Arrow */}
            <div className="text-3xl">
              <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
