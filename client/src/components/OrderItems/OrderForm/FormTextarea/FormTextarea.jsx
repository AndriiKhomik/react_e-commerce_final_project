import React from 'react';
import { TextField, Grid } from '@mui/material';
import { Field } from 'formik';
import InputLabel from '../../../CommonFormComponents/InputLabel';
import ErrorMessage from '../../../CommonFormComponents/ErrorMessage';

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
      <ErrorMessage name='comment' />
    </Grid>
  );
};

export default FormTextarea;
