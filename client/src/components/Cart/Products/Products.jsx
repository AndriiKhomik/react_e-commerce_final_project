import React, { useState } from 'react';
import {
  TableHead,
  Table,
  TableBody,
  TableContainer,
  TableRow,
  FormControl,
  Select,
  MenuItem,
} from '@mui/material';
import {
  StyledImg,
  StyledDiv,
  StyledTableCell,
  StyledTableCellHead,
  StyledTableRow,
} from './Styled';
import ebook from '../img/ereader.png';
import paperBook from '../img/open-book.png';
import audioBook from '../img/audio-book.png';

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
  const [img, setImg] = useState(paperBook);

  const handleChange = (value) => {
    if (value.target.value === 1) {
      setImg(ebook);
    }
    if (value.target.value === 2) {
      setImg(paperBook);
    }
    if (value.target.value === 3) {
      setImg(audioBook);
    }
  };

  return (
    <TableContainer>
      <Table sx={{ minWidth: 320 }} size='small' aria-label='a dense table'>
        <TableHead>
          <StyledTableRow>
            <StyledTableCellHead align='left'>Products</StyledTableCellHead>
            <StyledTableCellHead align='center'>Format</StyledTableCellHead>
            <StyledTableCellHead align='center'>Price</StyledTableCellHead>
            <StyledTableCellHead align='center'>Quantity</StyledTableCellHead>
            <StyledTableCellHead align='center'>Total</StyledTableCellHead>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <StyledTableCell component='th' scope='row'>
                {row.cover} <span>{row.number}</span>
              </StyledTableCell>
              <StyledTableCell align='center'>
                <StyledImg src={img} alt='ebook' />
                <FormControl fullWidth>
                  <Select
                    defaultValue={2}
                    onChange={handleChange}
                    sx={{ height: '28px' }}
                  >
                    <MenuItem value={1}>Ebook</MenuItem>
                    <MenuItem value={2}>Paper Book</MenuItem>
                    <MenuItem value={3}>Audio Book</MenuItem>
                  </Select>
                </FormControl>
              </StyledTableCell>
              <StyledTableCell align='center'>${row.price}</StyledTableCell>
              <StyledTableCell align='center'>
                <StyledDiv>-</StyledDiv>
                {row.quantity}
                <StyledDiv sx={{ padding: '0 6px' }}>+</StyledDiv>
              </StyledTableCell>
              <StyledTableCell align='center'>
                ${row.price * row.quantity}
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Products;
