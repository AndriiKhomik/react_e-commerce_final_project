import React from 'react';
import PropTypes from 'prop-types';
import { StyledTitleWrapper, StyledTitle, StyledGenre } from './Styles';

const ItemTitle = ({ name, genre }) => {
  return (
    <StyledTitleWrapper>
      <StyledTitle>{name}</StyledTitle>
      <StyledGenre href='#!'>{genre}</StyledGenre>
    </StyledTitleWrapper>
  );
};

ItemTitle.propTypes = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
};

export default ItemTitle;
