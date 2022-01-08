import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    currentPassword: Yup.string().required('Required field'),
    newPassword: Yup.string().min(
        7,
        'Password is too short - should be 7 chars minimum.',
    ).max(
        30,
        'Password is too long - should be 30 chars maximum.',
    ).required('Required field'),
    confirmPassword: Yup.string().oneOf(
        [Yup.ref('newPassword'), null],
        'Passwords must match',
    ).required('Required field'),
});
