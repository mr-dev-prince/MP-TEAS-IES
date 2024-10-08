import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import { carouselContent } from "../../constants/CarouselContent.js";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = () => {
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="w-full h-fit flex justify-center items-center md:py-2 relative group overflow-hidden select-none ">
      <span
        onClick={handlePrev}
        className="opacity-0 group-hover:opacity-100 bg-slate-400/[0.6] py-3  absolute left-0 z-50 cursor-pointer duration-200 hidden md:block"
      >
        <FaChevronLeft size={24} color="white" />
      </span>
      <div className="flex w-full justify-center items-center shadow-md shadow-slate-400">
        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full h-full"
        >
          {carouselContent.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                className="w-full h-80 md:h-[500px] object-fill "
                src={item.src}
                alt={item.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <span
        onClick={handleNext}
        className="opacity-0 absolute right-0 z-50 bg-slate-400/[0.6] py-3  group-hover:opacity-100 cursor-pointer duration-200 hidden md:block"
      >
        <FaChevronRight size={24} color="white" />
      </span>
    </div>
  );
};

export default Carousel;
