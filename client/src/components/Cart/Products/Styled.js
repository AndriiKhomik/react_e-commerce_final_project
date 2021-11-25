import { Select, TableCell, TableContainer, TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledTableContainer = styled(TableContainer)`
  overflowy: 'hidden';
  margin-bottom: 36px;
`;

export const StyledTableRow = styled(TableRow)`
  border-bottom: 1px solid #f8a300;
`;

export const StyledTableCellHead = styled(TableCell)(() => ({
  fontWeight: 'bold',
  fontSize: '16px',
  color: '#3D3D3D',
  borderBottom: `1px solid ${theme.palette.primary.main}`,
  padding: '4px',
}));

export const StyledTableCell = styled(TableCell)`
  border-bottom: none;
  background-color: #fbfbfb;
  border-bottom: 4px solid #ffffff;
  border-top: 4px solid #ffffff;
  span {
    font-weight: 700;
  }
`;

export const StyledSellTotals = styled(TableCell)(() => ({
  backgroundColor: '#fbfbfb',
  borderBottom: '4px solid #FFFFFF',
  borderTop: '4px solid #FFFFFF',
  fontWeight: 'bold',
  color: `${theme.palette.primary.main}`,
}));

export const StyledDiv = styled('div')`
  display: inline-block;
  background-color: #f8a300;
  margin-left: 4px;
  margin-right: 4px;
  padding: 0 8px;
  border-radius: 50%;
  cursor: pointer;
  color: #ffffff;
`;

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
