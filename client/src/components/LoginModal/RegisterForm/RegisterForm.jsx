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
import { registerUser } from '../../../api/user';
import { submitLogin } from '../LoginForm/submitLogin';
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
        submitLogin(loginData, setError);

        if (!error) {
          dispatch(setIsLoginTrue());
          handleClose();
        }
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
