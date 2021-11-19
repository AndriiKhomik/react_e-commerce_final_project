import { Container } from '@mui/material';
import React from 'react';
import Navbar from './Navbar/Navbar';

const Header = () => {
  return (
    <Container maxWidth='lg'>
      <Navbar />
    </Container>
  );
};

export default Header;
