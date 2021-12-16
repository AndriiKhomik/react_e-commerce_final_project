import React from 'react';
import Pagination from '@mui/material/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { StyledStack } from './Styles';
import { setCurrentPage } from '../../store/filter/actions';

const PaginationRounded = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(({ filter }) => filter.currentPage);

  const totalCountOfPages = useSelector(
    ({ filter }) => filter.totalCountOfPages,
  );
  console.log(currentPage, totalCountOfPages);

  const handleChange = (event, value) => {
    dispatch(setCurrentPage(value));
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
