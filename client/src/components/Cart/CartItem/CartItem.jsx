import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useMediaQuery, TableRow, Box } from '@mui/material';
import theme from '../../../services/theme/theme';
import { StyledDiv, StyledSellTotals } from '../CartProducts/Styled';
import DeleteIcon from '../../icons/DeleteIcon';
import {
  StyledBox,
  StyledIconWrapper,
  StyledImg,
  StyledLink,
  StyledTableCell,
  StyledTableImgCell,
} from './Styled';
import {
  bookRemovedFromCart,
  decreaseAmount,
  increaseAmount,
} from '../../../store/cart/actions';

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const collapseTableColumn = useMediaQuery(theme.breakpoints.up('md'));
  const { url, name, price, itemNo, cartQuantity } = cartItem;

  return (
    <TableRow>
      <StyledTableImgCell component='th' scope='row'>
        <StyledLink as={Link} to={`/products/${itemNo}`}>
          <StyledImg src={url} alt='book cover' />
          <StyledBox>
            <span className='title'>{name}</span>
            <span>SKU {itemNo}</span>
          </StyledBox>
        </StyledLink>
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
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <StyledDiv onClick={() => dispatch(decreaseAmount(itemNo))}>
            -
          </StyledDiv>
          <Box sx={{ width: '14px' }}>{cartQuantity}</Box>
          <StyledDiv
            sx={{ padding: '0 6px' }}
            onClick={() => dispatch(increaseAmount(itemNo))}
          >
            +
          </StyledDiv>
        </Box>
      </StyledTableCell>
      <StyledSellTotals align='center' sx={{ padding: 0 }}>
        ${+price * +cartQuantity}
      </StyledSellTotals>
      <StyledTableCell align='center'>
        <StyledIconWrapper
          onClick={() => dispatch(bookRemovedFromCart(itemNo))}
        >
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
    cartQuantity: PropTypes.number,
  }).isRequired,
};

export default CartItem;
