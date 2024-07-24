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
    <div className="w-full h-fit flex justify-center items-center md:py-2 lg:px-8  overflow-hidden select-none p-2 ">
      <span
        onClick={handlePrev}
        className="opacity-50 hover:opacity-100 cursor-pointer duration-100 hidden md:block"
      >
        <FaChevronLeft size={32} />
      </span>
      <div className="flex w-full h-80 lg:h-[35rem] overflow-hidden justify-center items-center rounded-xl object-cover">
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
          className="w-full h-full rounded-xl overflow-hidden"
        >
          {carouselContent.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                className="w-full h-full object-cover rounded-xl"
                src={item.src}
                alt={item.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <span
        onClick={handleNext}
        className="opacity-50 hover:opacity-100 cursor-pointer duration-100 hidden md:block"
      >
        <FaChevronRight size={32} />
      </span>
    </div>
  );
};

export default Carousel;
