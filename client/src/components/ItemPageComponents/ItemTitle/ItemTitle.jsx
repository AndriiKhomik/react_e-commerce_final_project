import React from 'react';
import PropTypes from 'prop-types';
import { StyledTitleWrapper, StyledTitle, StyledGenre } from './Styles';
import { toCapitaleCase } from '../toCapitaleCase';

const ItemTitle = ({ name, genre }) => {
  return (
    <StyledTitleWrapper>
      <StyledTitle>{name}</StyledTitle>
      <StyledGenre to={`/products?genre=${genre}&startPage=1&sort=1`}>
        {toCapitaleCase(genre)}
      </StyledGenre>
    </StyledTitleWrapper>
  );
};

ItemTitle.propTypes = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
};

export default ItemTitle;
