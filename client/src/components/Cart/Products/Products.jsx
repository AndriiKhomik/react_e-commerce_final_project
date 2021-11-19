import React from 'react';
import {
  TableHead,
  Table,
  TableBody,
  TableContainer,
  TableRow,
} from '@mui/material';
import { StyledTableCell, StyledTableRow } from './Styled';

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
    quantity: 1,
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
  return (
    <TableContainer>
      <Table sx={{ minWidth: 320 }} size='small' aria-label='a dense table'>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell sx={{ fontWeight: 700 }} align='left'>
              Products
            </StyledTableCell>
            <StyledTableCell sx={{ fontWeight: 700 }} align='center'>
              Format
            </StyledTableCell>
            <StyledTableCell sx={{ fontWeight: 700 }} align='center'>
              Price
            </StyledTableCell>
            <StyledTableCell sx={{ fontWeight: 700 }} align='center'>
              Quantity
            </StyledTableCell>
            <StyledTableCell sx={{ fontWeight: 700 }} align='center'>
              Total
            </StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component='th' scope='row'>
                {row.cover}
              </StyledTableCell>
              <StyledTableCell align='center'>{row.number}</StyledTableCell>
              <StyledTableCell align='center'>{row.name}</StyledTableCell>
              <StyledTableCell align='center'>{row.price}</StyledTableCell>
              <StyledTableCell align='center'>{row.quantity}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Products;
