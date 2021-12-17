import React from 'react';
import PropTypes from 'prop-types';
import { StyledFormTitle } from './Styles';

const LoginTitle = ({ text, color, onClick }) => {
  return (
    <StyledFormTitle style={{ color: color.toString() }} onClick={onClick}>
      {text}
    </StyledFormTitle>
  );
};

LoginTitle.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

LoginTitle.defaultProps = {
  onClick: () => {},
};

export default LoginTitle;
