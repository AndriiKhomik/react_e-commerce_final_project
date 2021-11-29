import React from 'react';
import { contacts } from './contacts';
import ContactsItem from '../FooterContactsItem';
import { StyledList } from './Styles';

const FooterContactsList = () => {
  return (
    <StyledList>
      {contacts.map(({ id, ...contact }) => (
        <ContactsItem key={id} contact={contact} />
      ))}
    </StyledList>
  );
};

export default FooterContactsList;
