import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Formik, Field } from 'formik';
import { Grid, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { validationSchema } from './validationSchema';
import { loginFormData } from './loginFormData';
import ErrorMessage from '../../CommonFormComponents/ErrorMessage';
import {
  StyledFormWrapper,
  StyledServerError,
  StyledServerErrorWrapper,
} from '../Styles';
import FormButton from '../../OrderItems/OrderForm/FormButton';
import { setIsLoginTrue } from '../../../store/login/actions';
import { loginUser } from '../../../api/user';

const LoginForm = ({ handleClose }) => {
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const onSubmitLogin = (e) => {
    loginUser(e).then((data) => {
      if (data.token) {
        const { token } = data;
        const currentToken = token.replace(/Bearer /i, '');
        localStorage.setItem('token', currentToken);
        localStorage.setItem('email', e.loginOrEmail);
        dispatch(setIsLoginTrue());
        handleClose();
      } else {
        setError(Object.values(data).toString());
      }
    });
  };
  return (
    <Formik
      initialValues={{ loginOrEmail: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={onSubmitLogin}
    >
      <Form>
        <StyledFormWrapper>
          {loginFormData.map(({ id, name, type, placeholder, label }) => (
            <Grid key={id} item>
              <Field
                style={{ letterSpacing: '2px' }}
                id={name}
                name={name}
                as={TextField}
                label={label}
                placeholder={placeholder}
                type={type}
                variant='outlined'
                fullWidth
              />
              <ErrorMessage name={name} />
            </Grid>
          ))}
          <StyledServerErrorWrapper
            style={{ visibility: `${error ? 'hiden' : 'visible'}` }}
          >
            <StyledServerError>{error}</StyledServerError>
          </StyledServerErrorWrapper>

          <FormButton text='Login' />
        </StyledFormWrapper>
      </Form>
    </Formik>
  );
};

LoginForm.propTypes = {
  handleClose: PropTypes.func,
};

LoginForm.defaultProps = {
  handleClose: () => {},
};
export default LoginForm;
