/* eslint-disable prettier/prettier */
import React from 'react';
import FacebookIcon from '../../icons/FacebookIcon';
import InstagramIcon from '../../icons/InstagramIcon';
import TwitterIcon from '../../icons/TwitterIcon';
import LinkedinIcon from '../../icons/LinkedinIcon';
import YoutubeIcon from '../../icons/YoutubeIcon';

export const socials = [
    {
        id: '1',
        component: <FacebookIcon className="footer-icon" width="8" height="16" />,
        name: 'Facebook',
        link: '#',
    },
    { id: '2', component: <InstagramIcon className="footer-icon" width="16" height="16" />, name: 'Instagram', link: '#' },
    { id: '3', component: <TwitterIcon className="footer-icon" width="16" height="14" />, name: 'Twitter', link: '#' },
    { id: '4', component: <LinkedinIcon className="footer-icon" width="16" height="16" />, name: 'Linkedin', link: '#' },
    { id: '5', component: <YoutubeIcon className="footer-icon" width="16" height="14" />, name: 'Youtube', link: '#' },
];
