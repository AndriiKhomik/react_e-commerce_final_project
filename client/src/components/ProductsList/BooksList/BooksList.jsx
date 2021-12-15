import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Navigation } from 'swiper';
import { StyledContainer, StyledSliderWrapper } from './Styles';
import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import BooksListTitle from '../BooksListTitle';
import ProductItem from '../../ProductItem/ProductItem';

const BooksList = ({ items, text, authorName }) => {
  return (
    <StyledContainer>
      <BooksListTitle text={text} />
      <StyledSliderWrapper>
        <Swiper
          wrapperTag='ul'
          slidesPerView='auto'
          modules={[Navigation]}
          navigation={{ clickable: true }}
          breakpoints={{
            320: {
              spaceBetween: 35,
            },
            1200: {
              spaceBetween: 44,
            },
          }}
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
              _id,
              quantity,
            }) => (
              <SwiperSlide tag='li' key={itemNo} style={{ width: '163px' }}>
                <ProductItem
                  name={name}
                  url={imageUrls[0]}
                  price={currentPrice}
                  salePrice={previousPrice}
                  author={authorName || author.name}
                  // eslint-disable-next-line no-underscore-dangle
                  authorId={author._id}
                  itemNo={itemNo}
                  categories={categories}
                  _id={_id}
                  quantity={quantity}
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
  authorName: PropTypes.string,
};

BooksList.defaultProps = {
  authorName: '',
};

export default BooksList;
