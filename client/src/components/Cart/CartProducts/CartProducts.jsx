import React from 'react';
import { TableHead, Table, TableBody, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import {
  StyledTableCellHead,
  StyledTableContainer,
  StyledTableRow,
} from './Styled';
import theme from '../../../services/theme/theme';

const CartProducts = () => {
  const orders = useSelector((data) => data.shoppingCart);

  const collapseTableColumn = useMediaQuery(theme.breakpoints.up('md'));

  const items = orders.map((cartItem) => (
    <CartItem cartItem={cartItem} key={cartItem.itemNo} />
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
              <StyledTableCellHead align='center'>Price</StyledTableCellHead>
            )}
            <StyledTableCellHead sx={{ minWidth: '80px' }} align='center'>
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

export default CartProducts;
