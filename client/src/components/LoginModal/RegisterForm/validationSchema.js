import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+\s+[a-zA-Zа-яА-Я]+$/,
      'Allowed characters for Full Name is a-z, A-Z, а-я, А-Я.',
    )
    .required('Required field'),
  email: Yup.string().email('Invalid email address').required('Required field'),
  password: Yup.string()
    .required('No password provided.')
    .min(7, 'Password is too short - should be 7 chars minimum.')
    .max(30, 'Password is too long - should be 30 chars maximum')
    .matches(
      /^[a-zA-Z0-9]+$/,
      'Allowed characters for password is a-z, A-Z, 0-9.',
    ),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
});
