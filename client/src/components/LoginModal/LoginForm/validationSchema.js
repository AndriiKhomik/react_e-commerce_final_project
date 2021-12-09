import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  loginOrEmail: Yup.string()
    .email('Invalid email address')
    .required('Required field'),

  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.'),
});
