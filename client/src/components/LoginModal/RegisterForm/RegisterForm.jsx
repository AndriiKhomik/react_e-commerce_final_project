import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Formik, Field } from 'formik';
import { Grid, TextField } from '@mui/material';
import { validationSchema } from './validationSchema';
import { registerFormData } from './registerFormData';
import { StyledErrorMessage } from '../../OrderItems/OrderForm/OrderForm/Styles';
import {
  StyledFormWrapper,
  StyledServerError,
  StyledServerErrorWrapper,
} from '../Styles';
import FormButton from '../../OrderItems/OrderForm/FormButton';
import { registerUser } from '../../../api/user';

const RegisterForm = ({ handleClose }) => {
  const [error, setError] = useState('');

  const submitRegister = (e) => {
    const user = { ...e };
    delete user.confirmPassword;
    user.login = user.email.slice(0, user.email.indexOf('@'));
    registerUser(user)
      .then((data) => {
        if (!data.customerNo) {
          setError(Object.values(data).toString());
        } else {
          handleClose();
        }
      })
      .catch((err) => {
        const errMessage = err.response.data.message;
        if (errMessage.includes('already exists')) {
          setError(errMessage);
        }
      });
  };

  return (
    <Formik
      initialValues={{
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={validationSchema}
      onSubmit={submitRegister}
    >
      <Form>
        <StyledFormWrapper>
          {registerFormData.map(({ id, name, type, label }) => (
            <Grid key={id} item>
              <Field
                style={{ letterSpacing: '2px' }}
                id={name}
                name={name}
                as={TextField}
                label={label}
                type={type}
                variant='outlined'
                fullWidth
              />

              <StyledErrorMessage component='div' name={name} />
            </Grid>
          ))}
          <StyledServerErrorWrapper
            style={{ visibility: `${error ? 'hiden' : 'visible'}` }}
          >
            <StyledServerError>{error}</StyledServerError>
          </StyledServerErrorWrapper>
          <FormButton text='Register' />
        </StyledFormWrapper>
      </Form>
    </Formik>
  );
};

RegisterForm.propTypes = {
  handleClose: PropTypes.func,
};

RegisterForm.defaultProps = {
  handleClose: () => {},
};
export default RegisterForm;
