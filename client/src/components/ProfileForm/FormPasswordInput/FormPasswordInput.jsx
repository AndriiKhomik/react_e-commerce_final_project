import React, { useState } from 'react';
import { Field } from 'formik';
import { InputAdornment, IconButton } from '@mui/material';
import PropTypes from 'prop-types';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { StyledInput, StyledFormcontrol } from './Styles';

const FormPasswordInput = ({ name }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleClickShowPassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <StyledFormcontrol variant='outlined'>
        <Field
          autoComplete='on'
          style={{ letterSpacing: '2px' }}
          name={name}
          as={StyledInput}
          type={isPasswordVisible ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                aria-label={name}
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge='end'
              >
                {isPasswordVisible ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </StyledFormcontrol>
    </>
  );
};

FormPasswordInput.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FormPasswordInput;
