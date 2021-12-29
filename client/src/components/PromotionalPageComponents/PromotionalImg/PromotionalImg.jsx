import React from 'react';
import PropTypes from 'prop-types';

// import { StyledCardMediaBox, StyledImageWrapper } from './Styles';
// import { Picture } from './Pictire';

// const PromotionalImg = ({ srcS, srcL, srcM }) => {

import { StyledCardMediaBox, StyledCardMedia } from './Styles';

const PromotionalImg = ({ img, name }) => {
  return (
    <StyledCardMediaBox>
      <StyledImageWrapper>
        <Picture srcS={srcS} srcM={srcM} srcL={srcL} />
      </StyledImageWrapper>
    </StyledCardMediaBox>
  );
};

PromotionalImg.propTypes = {
  srcS: PropTypes.string.isRequired,
  srcL: PropTypes.string.isRequired,
  srcM: PropTypes.string.isRequired,
};

export default PromotionalImg;
