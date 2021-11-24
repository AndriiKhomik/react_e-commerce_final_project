import React, { useState } from 'react';
import {
  TableHead,
  Table,
  TableBody,
  TableContainer,
  TableRow,
  FormControl,
  MenuItem,
  Box,
  useMediaQuery,
} from '@mui/material';
import {
  StyledDiv,
  StyledSelect,
  StyledSellTotals,
  StyledTableCell,
  StyledTableCellHead,
  StyledTableRow,
} from './Styled';
import theme from '../../../services/theme/theme';
import Ebook from '../../icons/ElBookIcon';
import CartonBook from '../../icons/PaperBookIcon';
import AudioBook from '../../icons/AudioBookIcon';
import DeleteIcon from '../../icons/DeleteIcon';

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
    <TableRow key={row.id}>
      <StyledTableCell component='th' scope='row'>
        {row.cover} <span>{row.number}</span>
      </StyledTableCell>
      {collapseTableColumn && (
        <StyledTableCell align='center'>
          {img}
          <FormControl fullWidth>
            <StyledSelect defaultValue={2} onChange={handleChange}>
              <MenuItem value={1}>Ebook</MenuItem>
              <MenuItem value={2}>Paper Book</MenuItem>
              <MenuItem value={3}>Audio Book</MenuItem>
            </StyledSelect>
          </FormControl>
        </StyledTableCell>
      )}
      {collapseTableColumn && (
        <StyledTableCell align='center'>${row.price}</StyledTableCell>
      )}
      <StyledTableCell align='center' sx={{ padding: '4px' }}>
        <StyledDiv>-</StyledDiv>
        {row.quantity}
        <StyledDiv sx={{ padding: '0 6px' }}>+</StyledDiv>
      </StyledTableCell>
      <StyledSellTotals align='center'>
        ${row.price * row.quantity}
      </StyledSellTotals>
      <StyledTableCell align='center'>
        <Box sx={{ cursor: 'pointer' }}>
          <DeleteIcon width='18px' height='18px' />
        </Box>
      </StyledTableCell>
    </TableRow>
  ));

  return (
    <TableContainer sx={{ overflowY: 'hidden' }}>
      <Table
        sx={{ minWidth: 320, borderCollapse: 'separate', minHeight: '100%' }}
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
    </TableContainer>
  );
};

export default Products;
