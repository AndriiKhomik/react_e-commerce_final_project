import React from 'react';
import { TextField, Grid } from '@mui/material';
import { Field } from 'formik';
import InputLabel from '../InputLabel';
import { StyledErrorMessage } from './Styles';

const FormTextarea = () => {
  return (
    <Grid item xs={12}>
      <InputLabel name='comment' label='Order notes (optional)' />
      <Field
        multiline
        as={TextField}
        id='comment'
        name='comment'
        rows={5}
        rowsmax={5}
        fullWidth
      />
      <StyledErrorMessage component='div' name='comment' />
    </Grid>
  );
};

export default FormTextarea;
