import React from 'react';
import PropTypes from 'prop-types';
import { StyledTitle } from './Styles';

const BooksListTitle = ({ text }) => {
  return <StyledTitle>{text}</StyledTitle>;
};

BooksListTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default BooksListTitle;
