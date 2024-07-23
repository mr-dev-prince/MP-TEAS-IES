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
    <div className=" w-full h-fit flex justify-center items-center py-2 select-none">
      <span
        onClick={handlePrev}
        className=" opacity-50 hover:opacity-100 cursor-pointer duration-100"
      >
        <FaChevronLeft size={32} />
      </span>
      <div className="lg:flex w-full h-[50rem] overflow-hidden hidden justify-center items-center rounded-xl object-cover">
        <Swiper
          ref={swiperRef}
          spaceBetween={70}
          slidesPerView={1}
          effect="cube"
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
        className=" opacity-50 hover:opacity-100 cursor-pointer duration-100"
      >
        <FaChevronRight size={32} />
      </span>
    </div>
  );
};

export default Carousel;
