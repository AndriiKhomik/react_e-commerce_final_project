import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Navigation, Pagination } from 'swiper';
import { StyledContainer, StyledSliderWrapper } from './Styles';
import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import BooksListTitle from '../BooksListTitle';
import ProductItem from '../../ProductItem/ProductItem';

const BooksList = ({ items, text }) => {
  return (
    <StyledContainer>
      <BooksListTitle text={text} />
      <StyledSliderWrapper>
        <Swiper
          wrapperTag='ul'
          slidesPerView='auto'
          spaceBetween={33}
          modules={[Navigation, Pagination]}
          navigation={{ clickable: true }}
          pagination={{ clickable: true }}
          loop
          simulateTouch={false}
        >
          {items.map(
            ({
              name,
              imageUrls,
              currentPrice,
              previousPrice,
              author,
              itemNo,
              categories,
            }) => (
              <SwiperSlide tag='li' key={itemNo} style={{ width: '163px' }}>
                <ProductItem
                  name={name}
                  url={imageUrls[0]}
                  price={currentPrice}
                  salePrice={previousPrice}
                  author={author.name}
                  itemNo={itemNo}
                  categories={categories}
                />
              </SwiperSlide>
            ),
          )}
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
