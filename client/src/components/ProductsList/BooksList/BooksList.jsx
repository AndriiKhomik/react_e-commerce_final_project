import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Navigation } from 'swiper';
import { StyledContainer, StyledSliderWrapper } from './Styles';
import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import BooksListTitle from '../BooksListTitle';
import ProductItem from '../../ProductItem/ProductItem';

const BooksList = ({ items, text }) => {
  return (
    <StyledContainer maxWidth='lg'>
      <BooksListTitle text={text} />
      <StyledSliderWrapper>
        <Swiper
          wrapperTag='ul'
          slidesPerView='auto'
          spaceBetween={25}
          modules={[Navigation]}
          navigation={{ clickable: true }}
          loop
        >
          {items.map((book) => (
            <SwiperSlide tag='li' key={book.id} style={{ width: '163px' }}>
              <ProductItem book={book} />
            </SwiperSlide>
          ))}
        </Swiper>
      </StyledSliderWrapper>
    </StyledContainer>
  );
};

BooksList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  text: PropTypes.string.isRequired,
};

export default BooksList;
