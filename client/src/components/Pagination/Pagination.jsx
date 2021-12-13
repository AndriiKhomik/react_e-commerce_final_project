import React from 'react';
import Pagination from '@mui/material/Pagination';
import { StyledStack } from './Styles';

const PaginationRounded = () => {
  return (
    <StyledStack spacing={2}>
      <Pagination count={3} variant='outlined' shape='rounded' />
    </StyledStack>
  );
};

export default PaginationRounded;
