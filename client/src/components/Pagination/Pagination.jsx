import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import { useSelector } from 'react-redux';
import { StyledStack } from './Styles';
import useQuery from '../../services/hooks/useQuery';

const PaginationRounded = () => {
  const history = useHistory();
  const { search } = useLocation();
  const query = useQuery();

  const totalCountOfPages = useSelector(
    ({ filter }) => filter.totalCountOfPages,
  );

  const handleChange = (event, value) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    const filterQuery = search.replace(
      /startPage=[0-9]+/,
      `startPage=${value}`,
    );

    history.push(filterQuery);
  };

  return (
    <StyledStack spacing={2}>
      <Pagination
        page={+query.get('startPage')}
        count={totalCountOfPages}
        siblingCount={0}
        boundaryCount={2}
        variant='outlined'
        shape='rounded'
        onChange={handleChange}
      />
    </StyledStack>
  );
};

export default PaginationRounded;
