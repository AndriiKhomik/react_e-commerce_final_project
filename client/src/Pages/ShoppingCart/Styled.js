import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '10px',
  paddingBottom: '36px',
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: '65% 30%',
    gap: '5%',
  },
}));

export const StyledTableTitle = styled(Box)`
  padding-top: 20px;
  font-size: calc(10px + 1vw);
  text-align: center;
  border: none;
`;
