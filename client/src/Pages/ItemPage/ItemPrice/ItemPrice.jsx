import React from 'react';
import PropTypes from 'prop-types';
import { StyledPriceWrapper, StyledPrice, StyledReviews } from './Styles';

const ItemPrice = ({ price, reviews }) => {
  const fixedPrice = Number(price).toFixed(2);
  return (
    <StyledPriceWrapper>
      <StyledPrice>${fixedPrice}</StyledPrice>
      <StyledReviews href='#!'>{reviews} Customer Review</StyledReviews>
    </StyledPriceWrapper>
  );
};

ItemPrice.propTypes = {
  price: PropTypes.string,
  reviews: PropTypes.string,
};

ItemPrice.defaultProps = {
  price: 0,
  reviews: 0,
};

export default ItemPrice;
