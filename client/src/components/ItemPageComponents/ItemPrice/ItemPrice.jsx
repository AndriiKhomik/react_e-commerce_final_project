import React from 'react';
import PropTypes from 'prop-types';
import { StyledPriceWrapper, StyledPrice, StyledPreviousPrice } from './Styles';

const ItemPrice = ({ price, salePrice, quantity }) => {
  const fixedPrice = (sum) => Number(sum).toFixed(2);
  const isAvailable = quantity ? '#f8a300' : '#A5A5A5';

  return (
    <StyledPriceWrapper>
      <StyledPrice style={{ color: isAvailable }}>
        ${fixedPrice(price)}
      </StyledPrice>
      {salePrice && (
        <StyledPreviousPrice>&#36;{fixedPrice(salePrice)}</StyledPreviousPrice>
      )}
    </StyledPriceWrapper>
  );
};

ItemPrice.propTypes = {
  price: PropTypes.number,
  salePrice: PropTypes.number,
  quantity: PropTypes.number.isRequired,
};

ItemPrice.defaultProps = {
  price: 0,
  salePrice: null,
};

export default ItemPrice;
