import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Formik, Field } from 'formik';
import { Grid, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { validationSchema } from './validationSchema';
import { registerFormData } from './registerFormData';
import ErrorMessage from '../../CommonFormComponents/ErrorMessage';
import {
  StyledFormWrapper,
  StyledServerError,
  StyledServerErrorWrapper,
} from '../Styles';
import FormButton from '../../OrderItems/OrderForm/FormButton';
import { loginUser, registerUser } from '../../../api/user';
import { setIsLoginTrue } from '../../../store/login/actions';

const RegisterForm = ({ handleClose }) => {
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const submitRegister = (e) => {
    setError('');
    const user = { ...e };
    delete user.confirmPassword;
    user.login = user.email;
    registerUser(user).then((data) => {
      if (!data.customerNo) {
        setError(Object.values(data).toString());
      } else {
        setError('');
        const loginData = {};
        loginData.loginOrEmail = user.email;
        loginData.password = user.password;
        loginUser(loginData).then((userData) => {
          if (userData.token) {
            const { token } = userData;
            const currentToken = token.replace(/Bearer /i, '');
            localStorage.setItem('token', currentToken);
            localStorage.setItem('email', loginData.loginOrEmail);
            dispatch(setIsLoginTrue());
            handleClose();
          } else {
            setError(Object.values(userData).toString());
          }
        });
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

              <ErrorMessage component='div' name={name} />
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
