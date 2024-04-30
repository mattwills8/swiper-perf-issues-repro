import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import './styles.css';

import Card from './Card';

export default function App({cards, cardWidth = 184}) {
  const slides = (
    <>
      {cards.map((card) => {
        return (
          <SwiperSlide key={card.id} style={{ width: cardWidth, height: cardWidth }}>
            <Card
              imageSrc={card.imageSrc}
            />
          </SwiperSlide>
        )
      })}
    </>
  )

  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={8}
      >
        {slides}
      </Swiper>
    </>
  );
}
