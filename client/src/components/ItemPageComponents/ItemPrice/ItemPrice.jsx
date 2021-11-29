import React from 'react';
import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';
import {
  StyledPriceWrapper,
  StyledPrice,
  StyledReviews,
  StyledReviewsWrapper,
} from './Styles';

const ItemPrice = ({ price, reviews, value }) => {
  const fixedPrice = Number(price).toFixed(2);

  return (
    <StyledPriceWrapper>
      <StyledPrice>${fixedPrice}</StyledPrice>
      <StyledReviewsWrapper>
        <Rating name='reviews rating' value={value} readOnly size='small' />
        <StyledReviews href='#!'>{reviews} Customer Review</StyledReviews>
      </StyledReviewsWrapper>
    </StyledPriceWrapper>
  );
};

ItemPrice.propTypes = {
  price: PropTypes.string,
  reviews: PropTypes.string,
  value: PropTypes.number,
};

ItemPrice.defaultProps = {
  price: 0,
  reviews: 0,
  value: 2,
};

export default ItemPrice;
