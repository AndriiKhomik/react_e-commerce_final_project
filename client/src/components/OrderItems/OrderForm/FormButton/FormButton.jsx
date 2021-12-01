import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Styles';

const FormButton = ({ text, isSubmitting, submitForm }) => {
  
  const handleSubmitMyForm = (e) => {
    console.log(submitForm);
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
      onClick={(e)=>handleSubmitMyForm(e)}
    >
      {text}
    </StyledButton>
  );
};

FormButton.propTypes = {
  isSubmitting: PropTypes.bool,
  text: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  submitForm: PropTypes.any.isRequired,
};

FormButton.defaultProps = {
  isSubmitting: false,
};
export default FormButton;
