import { TableCell, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledTableCell = styled(TableCell)(() => ({
  backgroundColor: '#fbfbfb',
  borderBottom: `4px solid ${theme.palette.text.light}`,
  borderTop: `4px solid ${theme.palette.text.light}`,
  '& span': {
    fontWeight: 700,
  },
}));

export const StyledTableImgCell = styled(TableCell)(() => ({
  backgroundColor: '#fbfbfb',
  borderBottom: `4px solid ${theme.palette.text.light}`,
  borderTop: `4px solid ${theme.palette.text.light}`,

  padding: '8px',

  '& span': {
    fontSize: '16px',
  },
  '& span:first-of-type': {
    fontWeight: 'bold',
  },
}));

// export const StyledSelect = styled(Select)`
//   height: 28px;
//   font-size: 14px;
//   margin: 4px 4px;
//   fieldset {
//     right: 5px;
//     left: 5px;
//     top: -3px;
//     bottom: 2px;
//   }
// `;

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

export const StyledIconWrapper = styled(Box)(() => ({
  cursor: 'pointer',
  '& svg': {
    transition: '0.4s',
    '&:hover': {
      fill: `${theme.palette.primary.main}`,
    },
  },
}));

export const StyledSellTotals = styled(TableCell)(() => ({
  backgroundColor: '#fbfbfb',
  borderBottom: `4px solid ${theme.palette.text.light}`,
  borderTop: `4px solid ${theme.palette.text.light}`,
  fontWeight: 'bold',
  color: `${theme.palette.primary.main}`,
}));

export const StyledImg = styled('img')`
  width: 42px;
  height: 64px;
  margin-right: 20px;
`;

export const StyledBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  paddingTop: '8px',
  [theme.breakpoints.up('md')]: {
    paddingTop: 0,
  },
}));

export const StyledLink = styled('a')(() => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));
