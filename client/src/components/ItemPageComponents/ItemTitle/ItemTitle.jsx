import React from 'react';
import PropTypes from 'prop-types';
import { StyledTitleWrapper, StyledTitle, StyledGenre } from './Styles';

const ItemTitle = ({ name, genre }) => {
  const clickHandler = () => {
    // change relevant checkbox of genre in redux
    console.log(genre);
  };

  return (
    <StyledTitleWrapper>
      <StyledTitle>{name}</StyledTitle>
      <StyledGenre onClick={clickHandler} to='/products'>
        {genre}
      </StyledGenre>
    </StyledTitleWrapper>
  );
};

ItemTitle.propTypes = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
};

export default ItemTitle;
