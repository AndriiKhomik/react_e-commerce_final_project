import React from 'react';
import PropTypes from 'prop-types';
import LightTooltip from '../../ProductItem/Tooltip';
import { StyledCardMediaWrapper } from './Styles';
import {
  StyledCardMediaBox,
  StyledCardMedia,
} from '../../ProductItem/BookImg/Styles';

const PromotionalImg = ({ promoUrl, title }) => {
  return (
    <LightTooltip title={title} placement='top'>
      <StyledCardMediaWrapper>
        <StyledCardMediaBox>
          <StyledCardMedia height='325' src={promoUrl} alt={title} />
        </StyledCardMediaBox>
      </StyledCardMediaWrapper>
    </LightTooltip>
  );
};

PromotionalImg.propTypes = {
  promoUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default PromotionalImg;
