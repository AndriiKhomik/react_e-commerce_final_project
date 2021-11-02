/* eslint-disable prettier/prettier */
import React from 'react';
import LocationIcon from '../icons/LocationIcon';
import EmailIcon from '../icons/EmailIcon';
import PhoneIcon from '../icons/PhoneIcon';

export const contacts = [
    {
        id: '1',
        component: <LocationIcon />,
        text: 'Ukraine, Kyiv, Bohdana Khmelnytskoho street, 32',
        isAddress: true,
    },
    {
        id: '2',
        component: <EmailIcon />,
        text: 'contact@bookstore.com',
        link: 'mailto:contact@bookstore.com',
        label: 'Send email',
    },
    {
        id: '3',
        component: <PhoneIcon />,
        text: '044-121-23-47',
        link: 'tel:+380441212347',
        label: 'Phone us',
    },
];
