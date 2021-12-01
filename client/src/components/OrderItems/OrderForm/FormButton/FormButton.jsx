import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Styles';

const FormButton = ({ text, isSubmitting }) => {
  return (
    <StyledButton
      type='submit'
      disabled={isSubmitting}
      variant='contained'
      title={text}
      aria-label={text}
    >
      {text}
    </StyledButton>
  );
};

FormButton.propTypes = {
  isSubmitting: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

FormButton.defaultProps = {
  isSubmitting: false,
};
export default FormButton;
