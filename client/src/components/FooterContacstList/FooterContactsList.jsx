import React from 'react';
import { contacts } from './contacts';
import ContactsItem from '../FooterContactsItem';
import './FooterContactsList.scss';

const FooterContactsList = () => {
  return (
    <ul className='footer__contacts-list'>
      {contacts.map(({ id, ...contact }) => (
        <ContactsItem key={id} contact={contact} />
      ))}
    </ul>
  );
};

export default FooterContactsList;
