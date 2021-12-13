import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Styles';

const FormButton = ({ text, isSubmitting, submitForm }) => {
  const handleSubmitForm = (e) => {
    if (submitForm) {
      submitForm(e);
    }
  };
  return (
    <StyledButton
      type='submit'
      disabled={isSubmitting}
      variant='contained'
      title={text}
      aria-label={text}
      onClick={(e) => handleSubmitForm(e)}
    >
      {text}
    </StyledButton>
  );
};

FormButton.propTypes = {
  isSubmitting: PropTypes.bool,
  text: PropTypes.string.isRequired,
  submitForm: PropTypes.func,
};

FormButton.defaultProps = {
  isSubmitting: false,
  submitForm: () => {},
};
export default FormButton;
