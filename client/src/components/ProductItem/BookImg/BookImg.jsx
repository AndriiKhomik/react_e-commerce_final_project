import React from 'react';
import PropTypes from 'prop-types';
import LightTooltip from '../Tooltip';
import {
  StyledCardMediaWrapper,
  StyledCardMediaBox,
  StyledCardMedia,
} from './Styles';

import defaultimg from '../../../img/missing_image.png';

const ProductImg = ({ url, name }) => {
  return (
    <LightTooltip title={name} placement='top'>
      <StyledCardMediaWrapper>
        <StyledCardMediaBox>
          <StyledCardMedia height='327' src={url} alt={name} />
        </StyledCardMediaBox>
      </StyledCardMediaWrapper>
    </LightTooltip>
  );
};

ProductImg.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string,
};

ProductImg.defaultProps = {
  url: defaultimg,
};

export default ProductImg;
