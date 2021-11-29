import React from 'react';
import PropTypes from 'prop-types';
import { StyledText } from './Styles';

const FormDescription = ({ text }) => {
  return <StyledText>{text}</StyledText>;
};

FormDescription.propTypes = {
  text: PropTypes.string.isRequired,
};
export default FormDescription;
