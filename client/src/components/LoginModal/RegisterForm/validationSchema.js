import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .matches(/\s*[a-zа-я]+\s+[a-zа-я]+\s*/gi, 'Please check your full name.')
    .required('Required field'),
  email: Yup.string().email('Invalid email address').required('Required field'),
  password: Yup.string()
    .required('No password provided.')
    .min(7, 'Password is too short - should be 7 chars minimum.')
    .max(30, 'Password is too long - should be 30 chars maximum'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
});
