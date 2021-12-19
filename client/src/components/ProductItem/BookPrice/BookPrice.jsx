import React from 'react';
import PropTypes from 'prop-types';
import { StyledPriceBox, StyledPriceText, StyledPriceSaleText } from './Styles';

const BookPrice = ({ price, salePrice, isAvailable }) => {
  const changeColor = isAvailable && '#A5A5A5';
  return (
    <StyledPriceBox>
      <StyledPriceText sx={{ color: changeColor }}>
        &#36;{price}
      </StyledPriceText>
      {salePrice && <StyledPriceSaleText>&#36;{salePrice}</StyledPriceSaleText>}
    </StyledPriceBox>
  );
};

BookPrice.propTypes = {
  price: PropTypes.number.isRequired,
  salePrice: PropTypes.number,
  isAvailable: PropTypes.bool.isRequired,
};

BookPrice.defaultProps = {
  salePrice: null,
};

export default BookPrice;
