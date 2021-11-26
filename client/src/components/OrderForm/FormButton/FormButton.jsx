import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Styles';

const FormButton = ({ isSubmitting, text }) => {
  return (
    <StyledButton type='submit' disabled={isSubmitting} variant='contained'>
      {text}
    </StyledButton>
  );
};

FormButton.propTypes = {
  isSubmitting: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

FormButton.defaultProps = {
  isSubmitting: () => {},
};
export default FormButton;
