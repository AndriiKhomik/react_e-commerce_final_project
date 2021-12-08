import React from 'react';
import PropTypes from 'prop-types';
import { StyledCardMediaBox, StyledCardMedia } from './Styles';

import defaultimg from '../../../img/missing_image.jpg';

const ItemImg = ({ img, name }) => {
  return (
    <StyledCardMediaBox>
      <StyledCardMedia src={img} alt={name} />
    </StyledCardMediaBox>
  );
};

ItemImg.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

ItemImg.defaultProps = {
  img: defaultimg,
};

export default ItemImg;
