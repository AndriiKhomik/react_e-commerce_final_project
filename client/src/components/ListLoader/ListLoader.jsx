import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { StyledLoaderBox } from './Styles';

const ListLoader = () => {
  return (
    <StyledLoaderBox>
      <CircularProgress color='inherit' />
    </StyledLoaderBox>
  );
};

export default ListLoader;
