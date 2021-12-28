import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import { useSelector } from 'react-redux';
import { StyledStack } from './Styles';

const PaginationRounded = () => {
  const history = useHistory();
  const { search } = useLocation();
  const [currentPage, setCurrentPage] = useState(1);

  const totalCountOfPages = useSelector(
    ({ filter }) => filter.totalCountOfPages,
  );

  const handleChange = (event, value) => {
    setCurrentPage(value);
    const query = search
      ? search.replace(/startPage=[0-9]+/, `startPage=${value}`)
      : `?startPage=${value}`;
    console.log(query);

    history.push(query);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <StyledStack spacing={2}>
      <Pagination
        page={+currentPage}
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
