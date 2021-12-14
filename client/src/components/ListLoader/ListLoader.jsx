import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { StyledLoaderBox } from './Styles';

const ListLoader = () => {
  return (
    <StyledLoaderBox>
      <LinearProgress color='inherit' />
    </StyledLoaderBox>
  );
};

export default ListLoader;
