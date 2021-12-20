import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Formik, Field } from 'formik';
import { Grid, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { validationSchema } from './validationSchema';
import { loginFormData } from './loginFormData';
import { StyledErrorMessage } from '../../OrderItems/OrderForm/OrderForm/Styles';
import {
  StyledFormWrapper,
  StyledServerError,
  StyledServerErrorWrapper,
} from '../Styles';
import { loginUser } from '../../../api/user';
import FormButton from '../../OrderItems/OrderForm/FormButton';
import { setIsLoginTrue } from '../../../store/login/actions';

const LoginForm = ({ handleClose }) => {
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const submitLogin = (e) => {
    loginUser(e).then((data) => {
      if (data.token) {
        dispatch(setIsLoginTrue());
        const { token } = data;
        const currentToken = token.replace(/Bearer /i, '');
        localStorage.setItem('token', currentToken);

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
      onSubmit={submitLogin}
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
              <StyledErrorMessage component='div' name={name} />
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
