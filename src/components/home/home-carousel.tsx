import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import Hero from "../ui/hero";
import { useState } from "react";

const HomeCarousel = () => {
  const [swiperIndex, setSwiperIndex] = useState(0);
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 5000 }}
      onActiveIndexChange={(swiperCore) => {
        setSwiperIndex(swiperCore.activeIndex);
      }}
    >
      {carousel_data.map((carousel) => (
        <SwiperSlide key={carousel.hashtag}>
          <Hero
            title={carousel.title}
            hashtag={carousel.hashtag}
            desc={carousel.desc}
            slides={2}
            swiperIndex={swiperIndex}
            photo={carousel.photo}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeCarousel;

const carousel_data = [
  {
    hashtag: "Fashion day",
    title: (
      <h1 className="text-2xl text-primary-900 font-semibold uppercase mb-1">
        80% Off
      </h1>
    ),
    desc: true,
    photo: "hero-bg-one.jpg",
  },
  {
    hashtag: "Beauty sale",
    title: (
      <h1 className="text-lg text-primary-900 font-semibold uppercase mb-1">
        Discover our <br /> beauty selection
      </h1>
    ),
    desc: false,
    photo: "hero-bg-two.jpg",
  },
];
