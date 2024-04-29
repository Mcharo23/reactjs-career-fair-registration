import React, { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/keyboard";
import { Autoplay, Keyboard, Pagination } from "swiper/modules";

type ReactNodeSwiperProps = {
  node: ReactNode[];
};

const ReactNodeSwiper: React.FC<ReactNodeSwiperProps> = ({ node }) => {
  return (
    <Swiper
      slidesPerView={"auto"}
      slidesPerGroupSkip={1}
      grabCursor={true}
      pagination={true}
      autoplay={{ delay: 10000, disableOnInteraction: false }}
      speed={1000}
      spaceBetween={20}
      keyboard={{
        enabled: true,
      }}
      modules={[Autoplay, Keyboard, Pagination]}
      style={{ width: "100%" }}
    >
      {node.map((nd, index) => {
        return (
          <SwiperSlide style={{ width: 400, height: "100%" }} key={index}>
            {nd}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ReactNodeSwiper;
