import React from 'react';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { useField } from 'formik';

const FormNumberInput = ({ name, placeholder, type }) => {
  const [field] = useField(name);
  return (
    <NumberFormat
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...field}
      format='+38 (###) ###-##-##'
      allowEmptyFormatting
      mask='_'
      customInput={TextField}
      id={name}
      name={name}
      placeholder={placeholder}
      type={type}
      variant='outlined'
      fullWidth
    />
  );
};

FormNumberInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default FormNumberInput;
