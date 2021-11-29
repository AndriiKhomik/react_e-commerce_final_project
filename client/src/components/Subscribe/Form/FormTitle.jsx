import React from 'react';
import PropTypes from 'prop-types';
import { StyledTitle } from './Styles';

const FormTitle = ({ title }) => {
  return <StyledTitle>{title}</StyledTitle>;
};

FormTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
export default FormTitle;
