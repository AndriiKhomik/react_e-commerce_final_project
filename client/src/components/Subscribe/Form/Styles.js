import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../Footer/FooterMain/StylesBreakpoints';

export const StyledBox = styled(Box)(() => ({
  [theme.breakpoints.up('xs')]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  //   [theme.breakpoints.up('dm')]: {},
}));
