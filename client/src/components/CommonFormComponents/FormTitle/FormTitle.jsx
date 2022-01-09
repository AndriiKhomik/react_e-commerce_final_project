import React from 'react';
import PropTypes from 'prop-types';
import { StyledTitle } from './Styles';

const FormTitle = ({ text }) => {
  return <StyledTitle>{text}</StyledTitle>;
};

FormTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default FormTitle;
