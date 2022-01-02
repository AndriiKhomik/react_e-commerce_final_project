import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    currentPassword: Yup.string(),
    newPassword: Yup.string().min(
        8,
        'Password is too short - should be 8 chars minimum.',
    ),
    confirmPassword: Yup.string().oneOf(
        [Yup.ref('newPassword'), null],
        'Passwords must match',
    ),
});
