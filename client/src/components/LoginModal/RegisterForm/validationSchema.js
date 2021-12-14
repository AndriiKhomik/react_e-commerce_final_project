import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .matches(/\s*[a-zа-я]+\s+[a-zа-я]+\s*/gi, 'Please check your full name.')
    .required('Required field'),
  email: Yup.string().email('Invalid email address').required('Required field'),
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.'),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
});
