import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  setSelectedGenre,
  setCurrentPage,
} from '../../../store/filter/actions';
import { StyledTitleWrapper, StyledTitle, StyledGenre } from './Styles';
import { toCapitaleCase } from '../toCapitaleCase';

const ItemTitle = ({ name, genre }) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(setSelectedGenre(genre));
    dispatch(setCurrentPage(1));
  };

  return (
    <StyledTitleWrapper>
      <StyledTitle>{name}</StyledTitle>
      <StyledGenre onClick={clickHandler} to='/products'>
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
