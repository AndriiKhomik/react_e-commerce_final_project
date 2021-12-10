import React from 'react';
import PropTypes from 'prop-types';
import BookFormatTag from '../../ProductItem/BookFormatTag';
import { StyledCardMediaBox, StyledCardMedia } from './Styles';

import defaultimg from '../../../img/missing_image.jpg';

const ItemImg = ({ img, name, categories }) => {
  return (
    <StyledCardMediaBox>
      <StyledCardMedia src={img} alt={name} />
      <BookFormatTag categories={categories} />
    </StyledCardMediaBox>
  );
};

ItemImg.propTypes = {
  name: PropTypes.string.isRequired,
  categories: PropTypes.string.isRequired,
  img: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

ItemImg.defaultProps = {
  img: defaultimg,
};

export default ItemImg;
