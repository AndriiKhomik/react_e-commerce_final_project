import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Pagination, Autoplay } from 'swiper';
import ListLoader from '../ListLoader';
import { getPromos } from '../../api/promos';
import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.scss';
import {
  StyledLink,
  SliderWrapper,
  StyledImageWrapper,
  StyledContainer,
} from './Styles';
import { AdaptivePicture } from './AdaptivePicture';

const HeroSlider = () => {
  const [promos, setPromos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPromos()
      .then((data) => {
        setPromos(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const slides = promos.map(({ _id, imageUrlS, imageUrlM, imageUrlL }) => {
    return (
      <SwiperSlide key={`slide-${_id}`} tag='li'>
        <StyledLink as={Link} to={`/promotions/${_id}`}>
          <StyledImageWrapper>
            <AdaptivePicture
              srcS={imageUrlS}
              srcM={imageUrlM}
              srcL={imageUrlL}
            />
          </StyledImageWrapper>
        </StyledLink>
      </SwiperSlide>
    );
  });

  return isLoading ? (
    <ListLoader />
  ) : (
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

export default HeroSlider;
