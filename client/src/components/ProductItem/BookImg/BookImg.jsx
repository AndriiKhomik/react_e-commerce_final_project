import React from 'react';
import PropTypes from 'prop-types';
import LightTooltip from '../Tooltip';
import {
  StyledCardMediaWrapper,
  StyledCardMediaBox,
  StyledCardMedia,
} from './Styles';

const ProductImg = ({ url, name }) => {
  return (
    <LightTooltip title={name} placement='top'>
      <StyledCardMediaWrapper>
        <StyledCardMediaBox>
          <StyledCardMedia height='243' src={url} alt={name} />
        </StyledCardMediaBox>
      </StyledCardMediaWrapper>
    </LightTooltip>
  );
};

ProductImg.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ProductImg;
