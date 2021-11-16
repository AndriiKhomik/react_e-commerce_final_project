import React from 'react';
import PropTypes from 'prop-types';
import { StyledPriceBox, StyledPriceText, StyledPriceSaleText } from './Styles';

const BookPrice = ({ price, salePrice }) => {
  return (
    <StyledPriceBox>
      <StyledPriceText>&#36;{price}</StyledPriceText>
      {salePrice && <StyledPriceSaleText>&#36;{salePrice}</StyledPriceSaleText>}
    </StyledPriceBox>
  );
};

BookPrice.propTypes = {
  salePrice: PropTypes.string,
  price: PropTypes.string.isRequired,
};

BookPrice.defaultProps = {
  salePrice: null,
};

export default BookPrice;