import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyledButton } from './Styles';
import { postShoppingCart } from '../../../../api/cart';

const FormButton = ({ text, isSubmitting, submitForm }) => {
  const shoppingCart = useSelector((data) => data.shoppingCart);
  const toHomePage = useHistory();
  const handleSubmitForm = (e) => {
    if (submitForm) {
      submitForm(e);
      postShoppingCart(shoppingCart)
        .then(() => {
          localStorage.removeItem('shoppingCart');
        })
        .then(() => {
          toHomePage.push('/');
        });
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
