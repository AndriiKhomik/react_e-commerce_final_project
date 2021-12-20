import React from 'react';
import PropTypes from 'prop-types';
// import Rating from '@mui/material/Rating';
import {
  StyledPriceWrapper,
  StyledPrice,
  // StyledReviews,
  // StyledReviewsWrapper,
  StyledPreviousPrice,
} from './Styles';

const ItemPrice = ({
  price,
  //  reviews,
  //   value,
  salePrice,
  quantity,
}) => {
  const fixedPrice = (sum) => Number(sum).toFixed(2);
  const isAvailable = quantity ? '#f8a300' : '#A5A5A5';

  return (
    <StyledPriceWrapper>
      <div>
        <StyledPrice style={{ color: isAvailable }}>
          ${fixedPrice(price)}
        </StyledPrice>
        {salePrice && (
          <StyledPreviousPrice>
            &#36;{fixedPrice(salePrice)}
          </StyledPreviousPrice>
        )}
      </div>
      {/* <StyledReviewsWrapper>
        <Rating
          name='reviews rating'
          value={value}
          readOnly
          size='small'
          style={{ bottom: '-3px' }}
        />

        <StyledReviews href='#!'>{reviews} Customer Review</StyledReviews>
      </StyledReviewsWrapper> */}
    </StyledPriceWrapper>
  );
};

ItemPrice.propTypes = {
  price: PropTypes.number,
  salePrice: PropTypes.number,
  quantity: PropTypes.number.isRequired,
  // reviews: PropTypes.number,
  // value: PropTypes.number,
};

ItemPrice.defaultProps = {
  price: 0,
  salePrice: null,
  // reviews: 0,
  // value: 2,
};

export default ItemPrice;
