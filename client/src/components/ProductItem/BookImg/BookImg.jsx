import React from 'react';
import PropTypes from 'prop-types';
import BookSaleTag from '../BookSaleTag';
import BookFormatTag from '../BookFormatTag';
import FavouriteBtn from '../FavouriteBtn';
import LightToolTip from '../Tooltip';
import {
  StyledCardMediaWrapper,
  StyledCardMediaBox,
  StyledCardMedia,
} from './Styles';

const ProductImg = ({ url, name, categories, itemNo, salePrice }) => {
  return (
    <LightToolTip title={name} placement='top' sx={{ zIndex: 5 }}>
      <StyledCardMediaWrapper>
        <StyledCardMediaBox>
          <StyledCardMedia height='243' src={url} alt={name} />
          <FavouriteBtn itemNo={itemNo} />
          <BookFormatTag categories={categories} />
          <BookSaleTag salePrice={salePrice} />
        </StyledCardMediaBox>
      </StyledCardMediaWrapper>
    </LightToolTip>
  );
};

ProductImg.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  categories: PropTypes.string.isRequired,
  itemNo: PropTypes.string.isRequired,
  salePrice: PropTypes.number,
};

ProductImg.defaultProps = {
  salePrice: null,
};

export default ProductImg;
