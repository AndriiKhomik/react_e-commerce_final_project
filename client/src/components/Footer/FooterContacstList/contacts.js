/* eslint-disable prettier/prettier */
import React from 'react';
import LocationIcon from '../../icons/LocationIcon';
import EmailIcon from '../../icons/EmailIcon';
import PhoneIcon from '../../icons/PhoneIcon';

export const contacts = [
    {
        id: '1',
        component: (
            <LocationIcon fill='none' stroke='#FFAC0C' width='18' height='16' />
        ),
        text: 'Ukraine, Kyiv, Mezhova street, 32',
        isAddress: true,
    },
    {
        id: '2',
        component: (
            <EmailIcon fill='none' stroke='#FFAC0C' width='15' height='16' />
        ),
        text: 'contact@bookstore.com',
        link: 'mailto:contact@bookstore.com',
        label: 'Send email',
    },
    {
        id: '3',
        component: (
            <PhoneIcon fill='none' stroke='#FFAC0C' width='18' height='17' />
        ),
        text: '(044)-121-23-47',
        link: 'tel:+380441212347',
        label: 'Phone us',
    },
];
