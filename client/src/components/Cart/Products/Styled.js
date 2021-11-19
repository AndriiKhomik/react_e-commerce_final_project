import { TableCell, TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTableRow = styled(TableRow)`
  border-bottom: 1px solid #f8a300;
`;

export const StyledTableCellHead = styled(TableCell)`
  font-weight: 700;
`;

export const StyledTableCell = styled(TableCell)`
  border-bottom: none;
  background-color: #fbfbfb;
  border-bottom: 8px solid white;
  border-top: 8px solid white;
  span {
    font-weight: 700;
  }
`;

export const StyledImg = styled('img')`
  width: 28px;
  height: auto;
`;

export const StyledDiv = styled('div')`
  display: inline-block;
  background-color: #f8a300;
  margin-left: 4px;
  margin-right: 4px;
  padding: 0 8px;
  border-radius: 50%;
  cursor: pointer;
`;
