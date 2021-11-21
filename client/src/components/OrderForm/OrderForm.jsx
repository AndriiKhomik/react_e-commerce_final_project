import React, {useState} from 'react';
import { TextField, Grid, FormControlLabel, Button} from '@mui/material';
import { Form, Formik, Field } from 'formik';
import {StyledTitle, StyledLabel, StyledTag, StyledCheckbox, StyledErrorMessage} from './Styles';
import { formValues } from './formData';
// import { userData } from './userData';
import { validationSchema } from './validationSchema';

const OrderForm = () => {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (values, { setSubmitting, resetForm }) => {
    setFormData(values)
    console.log(formData);
    setSubmitting(false); 
    resetForm({})
  };


  return (
    <>
      <StyledTitle>
        Billing Address
      </StyledTitle>
      <Formik
        initialValues={{
          fullName: '',
          email: '',
          country: '',
          city: '',
          address: '',
          tel: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ isSubmitting}) => (
          <Form>
              <Grid container spacing={{ xs: 2, sm: 3 }}>
            {formValues.map(({ id, name, type, placeholder, label }) => (
                <Grid key={id} item xs={12} ds={6}>
                <StyledLabel htmlFor={name}>
                  {label} <StyledTag>*</StyledTag>
                </StyledLabel>
                <Field
                  id={name}
                  name={name}
                  as={TextField}
                  placeholder={placeholder}
                  type={type}
                  variant='outlined'
                  fullWidth
                />
                <StyledErrorMessage component='div' name={name} />
                </Grid>
            ))}
             <Grid item xs={12}>
             <StyledLabel htmlFor='textarea'>
             Order notes (optional)
                </StyledLabel>
            <Field
            multiline
            as={TextField}
            id = 'textarea'
            name='textarea'
            rows={5}
            rowsmax={5}  
            fullWidth  
/>
           <StyledErrorMessage component='div' name='textarea' />
            </Grid>
            <Grid item xs={12}>
            <FormControlLabel
          control={<StyledCheckbox />}
          label="Use your data?"
          labelPlacement="end"
        />
        </Grid>
             <Button type='submit' disabled={isSubmitting} variant='contained'>
              Place Order
            </Button> 
            </Grid>    
          </Form>
        )}          
      </Formik>     
    </>
  );
};

export default OrderForm;
