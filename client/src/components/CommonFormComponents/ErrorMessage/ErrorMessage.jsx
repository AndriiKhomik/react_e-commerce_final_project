import React from 'react';
import PropTypes from 'prop-types';
import { StyledErrorMessage } from './Styles';

const ErrorMessage = ({ name }) => {
  return <StyledErrorMessage component='div' name={name} />;
};

ErrorMessage.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ErrorMessage;
