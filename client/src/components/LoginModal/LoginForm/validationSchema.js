import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  loginOrEmail: Yup.string()
    .email('Invalid email address')
    .required('Required field'),

  password: Yup.string()
    .required('No password provided.')
    .min(7, 'Password is too short - should be 8 chars minimum.')
    .max(30, 'Password is too long - should be 30 chars maximum')
    .matches(
      /^[a-zA-Z0-9]+$/,
      'Allowed characters for password is a-z, A-Z, 0-9.',
    ),
});
