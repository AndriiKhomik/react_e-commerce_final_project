import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useMediaQuery, TableRow } from '@mui/material';
import {
  allBookRemovedFromCart,
  bookAddedToCart,
  bookRemovedFromCart,
} from '../../../store/cart/actions';
import theme from '../../../services/theme/theme';
import { StyledDiv, StyledSellTotals } from '../Products/Styled';
import DeleteIcon from '../../icons/DeleteIcon';
import { StyledIconWrapper, StyledTableCell } from './Styled';

const ProductItem = ({ item, onIncrease, onDecrease, onDelete }) => {
  const collapseTableColumn = useMediaQuery(theme.breakpoints.up('md'));
  const { imageUrls, name, currentPrice, itemNo, quantity } = item;
  console.log(imageUrls);

  return (
    <TableRow>
      <StyledTableCell component='th' scope='row'>
        {imageUrls} <span>{name}</span>
      </StyledTableCell>
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
        <StyledTableCell align='center'>${currentPrice}</StyledTableCell>
      )}
      <StyledTableCell align='center' sx={{ padding: '4px' }}>
        <StyledDiv onClick={() => onDecrease(itemNo)}>-</StyledDiv>
        {quantity}
        <StyledDiv sx={{ padding: '0 6px' }} onClick={() => onIncrease(itemNo)}>
          +
        </StyledDiv>
      </StyledTableCell>
      <StyledSellTotals align='center'>
        ${+currentPrice * +quantity}
      </StyledSellTotals>
      <StyledTableCell align='center'>
        <StyledIconWrapper onClick={() => onDelete(itemNo)}>
          <DeleteIcon width='18px' height='18px' />
        </StyledIconWrapper>
      </StyledTableCell>
    </TableRow>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal } }) => {
  return {
    items: cartItems,
    total: orderTotal,
  };
};

const mapDispatchToProps = () => {
  return {
    onIncrease: bookAddedToCart,
    onDecrease: bookRemovedFromCart,
    onDelete: allBookRemovedFromCart,
  };
};

ProductItem.propTypes = {
  item: PropTypes.shape({
    currentPrice: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imageUrls: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    itemNo: PropTypes.number.isRequired,
  }).isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
