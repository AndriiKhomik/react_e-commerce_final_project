import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.scss';
import { StyledLink, SliderWrapper, ImageWrapper } from './sliderStyles';
import { bannersArray } from './banners';
import { AdaptivePicture } from './AdaptivePicture';

export const HeroSlider = () => {
  const slides = bannersArray.map(({ id, srcS, srcL }) => {
    return (
      <SwiperSlide key={`slide-${id}`} tag='li'>
        <StyledLink as={Link} to={`/promotions/${id}`}>
          <ImageWrapper>
            <AdaptivePicture srcL={srcL} srcS={srcS} />
          </ImageWrapper>
        </StyledLink>
      </SwiperSlide>
    );
  });

  return (
    <Container maxWidth='lg'>
      <SliderWrapper>
        <Swiper
          wrapperTag='ul'
          modules={[Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          // autoplay={{ delay: 3000 }}
          loop
        >
          {slides}
        </Swiper>
      </SliderWrapper>
    </Container>
  );
};
