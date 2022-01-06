import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  TextField,
  Grid,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Box,
} from '@mui/material';
import { Form, Formik, Field } from 'formik';
import { formValues } from './formData';
import { validationSchema } from './validationSchema';
import InputLabel from '../InputLabel';
import FormTextarea from '../FormTextarea';
import FormNumberInput from '../FormNumberInput';
import ErrorIndicator from '../../../ErrorIndicator';
import { StyledErrorMessage } from './Styles';
import { StyledTitle } from '../../Styles';
import { postOrder } from '../../../../api/order';
import { clearCart } from '../../../../store/cart/actions';
import { placeOrderLetter } from './placeOrderLetter';

const letterSubject = 'Good news from the Bookstore! Thank you for order!';

const OrderForm = ({ bindSubmitForm }) => {
  const formRef = useRef();
  const dispatch = useDispatch();
  const [shippingCharge, setShippingCharge] = useState(0);
  const [availableItems, setAvaliableItems] = useState({});
  const shoppingCart = useSelector((data) => data.shoppingCart);
  const toHomePage = useHistory();
  const [open, setOpen] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

  useEffect(() => {
    const items = {};
    shoppingCart.map((book) => {
      items[book.name] = book.quantity;
      return setAvaliableItems(items);
    });
  }, [shoppingCart]);

  const order = shoppingCart.map((product) => {
    const {
      _id,
      name,
      itemNo,
      author,
      cartQuantity,
      quantity,
      categories,
      publisher,
      price,
      shortDescription,
      fullDescription,
      yearOfPublishing,
      genre,
      numberOfPages,
      coverType,
      url,
    } = product;
    return {
      product: {
        quantity,
        _id,
        name,
        itemNo,
        author,
        categories,
        publisher,
        shortDescription,
        fullDescription,
        yearOfPublishing,
        genre,
        numberOfPages,
        coverType,
        imageUrls: [url],
        currentPrice: price,
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
        comment: values.comment,
        postal: '01044',
      },
      shipping: shippingCharge,
      paymentInfo: 'Сash to the courier',
      letterSubject,
      letterHtml: placeOrderLetter,
      email: values.email,
      mobile: values.tel,
    };

    postOrder(newOrder)
      .then((data) => {
        if (data.message && data.message.includes('Some of your products')) {
          handleClickOpen();
          return;
        }
        localStorage.removeItem('shoppingCart');
        dispatch(clearCart([]));
        resetForm({});
        toHomePage.push('/');
      })
      .catch(() => {
        setHasError(true);
      });
    setSubmitting(false);
  };

  let keyId = 10;

  return (
    <>
      {hasError && <ErrorIndicator />}
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

      <Dialog open={open} onClose={handleClose}>
        <DialogContent sx={{ background: '#fff' }}>
          <DialogContentText>
            Unfortunately we have no available amount of books for you
          </DialogContentText>
          <Box>
            <DialogContentText sx={{ marginTop: '16px' }}>
              Available amount is:
            </DialogContentText>
            <Box style={{ display: 'flex', marginTop: '8px' }}>
              <Box>
                {Object.keys(availableItems).map((item) => {
                  keyId += 1;
                  return (
                    <DialogContentText key={keyId}>{item}: </DialogContentText>
                  );
                })}
              </Box>
              <Box>
                {Object.values(availableItems).map((item) => {
                  keyId += 1;
                  return (
                    <DialogContentText key={keyId}>
                      &nbsp;{item}
                    </DialogContentText>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions sx={{ background: '#fff' }}>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

OrderForm.propTypes = {
  bindSubmitForm: PropTypes.func.isRequired,
};

export default OrderForm;
