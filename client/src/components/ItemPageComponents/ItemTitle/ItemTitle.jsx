import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setSelectedGenre } from '../../../store/filter/actions';
import { StyledTitleWrapper, StyledTitle, StyledGenre } from './Styles';

const ItemTitle = ({ name, genre }) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(setSelectedGenre(genre));
    // change relevant checkbox of genre in redux
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
