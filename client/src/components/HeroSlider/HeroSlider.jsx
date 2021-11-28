import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.scss';
import {
  StyledLink,
  SliderWrapper,
  StyledImageWrapper,
  StyledContainer,
} from './Styles';
import { AdaptivePicture } from './AdaptivePicture';
import { bannersArray } from './banners';

export const HeroSlider = () => {
  const slides = bannersArray.map(({ id, srcS, srcM, srcL }) => {
    return (
      <SwiperSlide key={`slide-${id}`} tag='li'>
        <StyledLink as={Link} to={`/promotions/${id}`}>
          <StyledImageWrapper>
            <AdaptivePicture srcS={srcS} srcM={srcM} srcL={srcL} />
          </StyledImageWrapper>
        </StyledLink>
      </SwiperSlide>
    );
  });

  return (
    <StyledContainer>
      <SliderWrapper>
        <Swiper
          wrapperTag='ul'
          modules={[Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
        >
          {slides}
        </Swiper>
      </SliderWrapper>
    </StyledContainer>
  );
};
