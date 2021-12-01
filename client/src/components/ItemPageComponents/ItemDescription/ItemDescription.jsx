import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledDescriptionWrapper,
  StyledDescriptionTitle,
  StyledDescription,
} from './Styles';

const ItemDescription = ({ shortDescription }) => {
  return (
    <StyledDescriptionWrapper>
      <StyledDescriptionTitle>Short Description:</StyledDescriptionTitle>
      <StyledDescription>{shortDescription}</StyledDescription>
    </StyledDescriptionWrapper>
  );
};

ItemDescription.propTypes = {
  shortDescription: PropTypes.string.isRequired,
};

export default ItemDescription;
