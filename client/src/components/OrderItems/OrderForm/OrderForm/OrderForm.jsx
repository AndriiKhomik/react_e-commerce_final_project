import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TextField, Grid } from '@mui/material';
import { Form, Formik, Field } from 'formik';
import { formValues } from './formData';
import { validationSchema } from './validationSchema';
import InputLabel from '../InputLabel';
import FormTextarea from '../FormTextarea';
import FormNumberInput from '../FormNumberInput';
import { StyledErrorMessage } from './Styles';
import { StyledTitle } from '../../Styles';

const OrderForm = ({ bindSubmitForm }) => {
  const formRef = useRef();
  useEffect(() => {
    bindSubmitForm(formRef.current);
  }, []);

  const handleFormSubmit = (values, { setSubmitting, resetForm }) => {
    // console.log(values);
    setSubmitting(false);
    resetForm({});
  };
  return (
    <>
      <StyledTitle>Billing Address</StyledTitle>
      <Formik
        initialValues={{
          fullName: '',
          email: '',
          country: '',
          city: '',
          address: '',
          tel: '',
          comment: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
        innerRef={formRef}
      >
        {() => {
          return (
            <Form>
              <Grid container spacing={{ xs: 3 }}>
                {formValues.map(({ id, name, type, placeholder, label }) => (
                  <Grid key={id} item xs={12} ds={6}>
                    <InputLabel name={name} label={label} required />
                    {name === 'tel' ? (
                      <FormNumberInput
                        name={name}
                        placeholder={placeholder}
                        type={type}
                      />
                    ) : (
                      <Field
                        id={name}
                        name={name}
                        as={TextField}
                        placeholder={placeholder}
                        type={type}
                        variant='outlined'
                        fullWidth
                      />
                    )}

                    <StyledErrorMessage component='div' name={name} />
                  </Grid>
                ))}
                <FormTextarea />
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

OrderForm.propTypes = {
  bindSubmitForm: PropTypes.func.isRequired,
};

export default OrderForm;
