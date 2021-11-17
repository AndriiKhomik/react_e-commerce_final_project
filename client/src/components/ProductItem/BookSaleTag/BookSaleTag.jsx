import React from 'react';
import PropTypes from 'prop-types';
import { StyledSaleParagraph } from './Styles';

const BookSaleTag = ({ salePrice }) => {
  return <>{salePrice && <StyledSaleParagraph>Sale</StyledSaleParagraph>}</>;
};

BookSaleTag.propTypes = {
  salePrice: PropTypes.string,
};

BookSaleTag.defaultProps = {
  salePrice: null,
};

export default BookSaleTag;
