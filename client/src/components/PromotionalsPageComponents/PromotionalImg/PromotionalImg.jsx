import React from 'react';
import PropTypes from 'prop-types';
import LightTooltip from '../../ProductItem/Tooltip';
import {
  StyledCardMediaWrapper,
  StyledCardMediaBox,
  StyledCardMedia,
} from './Styles';

const PromotionalImg = ({ imgUrl, title }) => {
  return (
    <LightTooltip title={title} placement='top'>
      <StyledCardMediaWrapper>
        <StyledCardMediaBox>
          <StyledCardMedia height='325' src={imgUrl} alt={title} />
        </StyledCardMediaBox>
      </StyledCardMediaWrapper>
    </LightTooltip>
  );
};

PromotionalImg.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default PromotionalImg;
