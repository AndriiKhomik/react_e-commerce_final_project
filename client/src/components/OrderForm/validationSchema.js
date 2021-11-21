import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    fullName: Yup.string()
        .matches(
            /^(?:([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)) (?:([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*))$/g,
            'Please check your full name.',
        )
        .required('Required field'),
    email: Yup.string().email('Invalid email address').required('Required field'),
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
