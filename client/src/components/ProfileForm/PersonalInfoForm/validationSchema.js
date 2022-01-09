/* eslint-disable prettier/prettier */
import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .matches(/\s*[a-zа-я]+\s+[a-zа-я]+\s*/gi, 'Please check your full name.')
    .required('Required field'),
  country: Yup.string().required('Required field'),
  city: Yup.string().required('Required field'),
  address: Yup.string()
    .min(3, 'The address must be longer than 3 characters')
    .required('Required field'),
  tel: Yup.string()
    .matches(
      /^[+]?38\s[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{2}[-\s.]?[0-9]{2}$/im,
      'Invalid phone number format',
    )
    .required('Required field'),
});
