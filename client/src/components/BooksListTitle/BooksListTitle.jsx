import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@mui/material';
import { StyledTitle } from './Styles';

const BooksListTitle = ({ text }) => {
  return (
    <Container maxWidth='lg'>
      <StyledTitle>{text}</StyledTitle>
    </Container>
  );
};

BooksListTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default BooksListTitle;
