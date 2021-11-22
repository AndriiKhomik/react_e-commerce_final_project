import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledCardMediaWrapper,
  StyledCardMediaBox,
  StyledCardMedia,
} from './Styles';

import defaultimg from '../../../img/missing_image.png';

const ItemImg = ({ img, name }) => {
  return (
    <StyledCardMediaWrapper>
      <StyledCardMediaBox>
        <StyledCardMedia src={img} alt={name} />
      </StyledCardMediaBox>
    </StyledCardMediaWrapper>
  );
};

ItemImg.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string,
};

ItemImg.defaultProps = {
  img: defaultimg,
};

export default ItemImg;
