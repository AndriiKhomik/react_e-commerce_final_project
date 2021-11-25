import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl,
  MenuItem,
  useMediaQuery,
  Box,
  TableRow,
} from '@mui/material';
import theme from '../../../services/theme/theme';
import { StyledDiv, StyledSelect, StyledSellTotals } from '../Products/Styled';
import DeleteIcon from '../../icons/DeleteIcon';
import { StyledTableCell } from './Styled';

const ProductItem = ({ row, handleChange, img }) => {
  const collapseTableColumn = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <TableRow>
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
  );
};

ProductItem.propTypes = {
  row: PropTypes.shape({
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  img: PropTypes.node.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default ProductItem;
