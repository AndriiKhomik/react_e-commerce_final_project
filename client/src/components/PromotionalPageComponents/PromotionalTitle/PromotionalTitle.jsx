import React from 'react';
import PropTypes from 'prop-types';
import { StyledTitleWrapper, StyledTitle } from './Styles';

const PromotionalTitle = ({ name }) => {
  return (
    <StyledTitleWrapper>
      <StyledTitle>{name}</StyledTitle>
    </StyledTitleWrapper>
  );
};

PromotionalTitle.propTypes = {
  name: PropTypes.string.isRequired,
};

export default PromotionalTitle;
