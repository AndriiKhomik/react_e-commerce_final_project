import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { TextField, Grid } from '@mui/material';
import { Form, Formik, Field } from 'formik';
import { formValues } from './formData';
import { validationSchema } from './validationSchema';
import InputLabel from '../InputLabel';
import FormTextarea from '../FormTextarea';
import FormNumberInput from '../FormNumberInput';
import { StyledErrorMessage } from './Styles';
import { StyledTitle } from '../../Styles';
import { postOrder } from '../../../../api/order';

const letterSubject = 'Good news from the Bookstore! Thank you for order!';
const letterHtml = <h1>Your order is placed. OrderNo is 023689452.</h1>;

const OrderForm = ({ bindSubmitForm }) => {
  const formRef = useRef();
  const [shippingCharge, setShippingCharge] = useState(0);
  const shoppingCart = useSelector((data) => data.shoppingCart);
  const toHomePage = useHistory();

  useEffect(() => {
    bindSubmitForm(formRef.current);
  }, []);

  useEffect(() => {
    let total = 0;
    shoppingCart.map((item) => {
      total += item.price * item.quantity * (0.02).toFixed(2);
      return setShippingCharge(() => total);
    });
  }, [shoppingCart]);

  const order = shoppingCart.map((product) => {
    const { _id, name, itemNo, author, cartQuantity, quantity, categories } = product;
    return {
      product: {
        quantity,
        _id,
        name,
        itemNo,
        author,
        categories,
      },
      cartQuantity,
    };
  });

  const handleFormSubmit = (values, { setSubmitting, resetForm }) => {
    const newOrder = {
      products: order,
      deliveryAddress: {
        country: values.country,
        city: values.city,
        address: values.address,
        postal: '01044',
      },
      shipping: shippingCharge,
      paymentInfo: 'Сash to the courier',
      letterSubject,
      letterHtml,
      email: values.email,
      mobile: values.tel,
    };
    console.log(JSON.stringify(newOrder));
    postOrder(newOrder)
      .then(() => {
        localStorage.removeItem('shoppingCart');
      })
      .then(() => {
        toHomePage.push('/');
      });
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
