import { Select, TableCell, TableContainer, TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledTableContainer = styled(TableContainer)`
  overflowy: 'hidden';
  margin-bottom: 36px;
`;

export const StyledTableRow = styled(TableRow)(() => ({
  borderBottom: `1px solid ${theme.palette.primary.dark}`,
}));

export const StyledTableCellHead = styled(TableCell)(() => ({
  fontWeight: 'bold',
  fontSize: '16px',
  color: `${theme.palette.text.main}`,
  borderBottom: `1px solid ${theme.palette.primary.main}`,
  padding: '4px',
}));

export const StyledTableCell = styled(TableCell)(() => ({
  backgroundColor: '#fbfbfb',
  borderBottom: `4px solid ${theme.palette.text.light}`,
  borderTop: `4px solid ${theme.palette.text.light}`,
  '& span': {
    fontWeight: 700,
  },
}));

export const StyledSellTotals = styled(TableCell)(() => ({
  backgroundColor: '#fbfbfb',
  borderBottom: `4px solid ${theme.palette.text.light}`,
  borderTop: `4px solid ${theme.palette.text.light}`,
  fontWeight: 'bold',
  color: `${theme.palette.primary.main}`,
}));

export const StyledDiv = styled('div')(() => ({
  display: 'inline-block',
  backgroundColor: `${theme.palette.primary.dark}`,
  marginLeft: '4px',
  marginRight: '4px',
  padding: '0 8px',
  borderRadius: '50%',
  cursor: 'pointer',
  color: `${theme.palette.text.light}`,
}));

export const StyledSelect = styled(Select)`
  height: 28px;
  font-size: 14px;
  margin: 4px 4px;
  fieldset {
    right: 5px;
    left: 5px;
    top: -3px;
    bottom: 2px;
  }
`;
