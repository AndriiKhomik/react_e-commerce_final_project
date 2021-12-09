import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useMediaQuery, TableRow } from '@mui/material';
// import {
//   allBookRemovedFromCart,
//   bookAddedToCart,
//   bookRemovedFromCart,
// } from '../../../store/cart/actions';
import theme from '../../../services/theme/theme';
import { StyledDiv, StyledSellTotals } from '../CartProducts/Styled';
import DeleteIcon from '../../icons/DeleteIcon';
import {
  StyledBox,
  StyledIconWrapper,
  StyledImg,
  StyledTableCell,
  StyledTableImgCell,
} from './Styled';
import { decreaseAmount, increaseAmount } from '../../../store/cart/actions';

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const collapseTableColumn = useMediaQuery(theme.breakpoints.up('md'));
  const { url, name, price, itemNo, quantity } = cartItem;

  return (
    <TableRow>
      <StyledTableImgCell component='th' scope='row'>
        <StyledImg src={url} alt='book cover' />
        <StyledBox>
          <span className='title'>{name}</span>
          <span>Item number {itemNo}</span>
        </StyledBox>
      </StyledTableImgCell>
      {/* {collapseTableColumn && (
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
      )} */}
      {collapseTableColumn && (
        <StyledTableCell align='center'>${price}</StyledTableCell>
      )}
      <StyledTableCell align='center' sx={{ padding: '4px' }}>
        <StyledDiv onClick={() => dispatch(decreaseAmount(itemNo))}>
          -
        </StyledDiv>
        {quantity}
        <StyledDiv
          sx={{ padding: '0 6px' }}
          onClick={() => dispatch(increaseAmount(itemNo))}
        >
          +
        </StyledDiv>
      </StyledTableCell>
      <StyledSellTotals align='center'>${+price * +quantity}</StyledSellTotals>
      <StyledTableCell align='center'>
        <StyledIconWrapper onClick={() => console.log(itemNo)}>
          <DeleteIcon width='18px' height='18px' />
        </StyledIconWrapper>
      </StyledTableCell>
    </TableRow>
  );
};

CartItem.propTypes = {
  cartItem: PropTypes.shape({
    url: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    itemNo: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,
};

export default CartItem;
