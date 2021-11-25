import React, { useState } from 'react';
import { TableHead, Table, TableBody, useMediaQuery } from '@mui/material';
import {
  StyledTableCellHead,
  StyledTableContainer,
  StyledTableRow,
} from './Styled';
import theme from '../../../services/theme/theme';
import Ebook from '../../icons/ElBookIcon';
import CartonBook from '../../icons/PaperBookIcon';
import AudioBook from '../../icons/AudioBookIcon';
import ProductItem from '../ProductItem/ProductItem';

// Test data
const rows = [
  {
    id: 1,
    cover: 'img',
    number: 'long number',
    name: 'Harry Potter',
    price: 15,
    quantity: 1,
  },
  {
    id: 2,
    cover: 'img',
    number: 'long number',
    name: 'Harry Potter',
    price: 15,
    quantity: 2,
  },
  {
    id: 3,
    cover: 'img',
    number: 'long number',
    name: 'Harry Potter',
    price: 15,
    quantity: 1,
  },
];

const Products = () => {
  const [img, setImg] = useState(
    <Ebook width='24px' height='28px' fill='#000000' />,
  );

  const collapseTableColumn = useMediaQuery(theme.breakpoints.up('md'));

  const handleChange = (value) => {
    if (value.target.value === 1) {
      setImg(<Ebook width='24px' height='28px' fill='#000000' />);
    }
    if (value.target.value === 2) {
      setImg(<CartonBook width='24px' height='28px' fill='#000000' />);
    }
    if (value.target.value === 3) {
      setImg(<AudioBook width='24px' height='28px' fill='#000000' />);
    }
  };

  const items = rows.map((row) => (
    <ProductItem row={row} handleChange={handleChange} img={img} key={row.id} />
  ));

  return (
    <StyledTableContainer>
      <Table
        sx={{ borderCollapse: 'separate' }}
        size='small'
        aria-label='a dense table'
      >
        <TableHead sx={{ borderCollapse: 'separate' }}>
          <StyledTableRow>
            <StyledTableCellHead align='left'>Products</StyledTableCellHead>
            {collapseTableColumn && (
              <StyledTableCellHead align='center'>Format</StyledTableCellHead>
            )}
            {collapseTableColumn && (
              <StyledTableCellHead align='center'>Price</StyledTableCellHead>
            )}
            <StyledTableCellHead sx={{ minWidth: '70px' }} align='center'>
              Quantity
            </StyledTableCellHead>
            <StyledTableCellHead align='center'>Total</StyledTableCellHead>
            <StyledTableCellHead align='center'>Delete</StyledTableCellHead>
          </StyledTableRow>
        </TableHead>
        <TableBody>{items}</TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default Products;
