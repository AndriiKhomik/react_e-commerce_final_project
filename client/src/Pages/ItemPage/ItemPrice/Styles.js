import { styled } from '@mui/material/styles';
import { Link } from '@mui/material';
import theme from '../../../services/theme/theme';

export const StyledPriceWrapper = styled('div')(() => ({
  [theme.breakpoints.up('xs')]: {},
  [theme.breakpoints.up('sm')]: {},
  [theme.breakpoints.up('dm')]: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginTop: '20px',
  },
}));

export const StyledPrice = styled('p')(() => ({
  [theme.breakpoints.up('xs')]: {
    fontSize: '18px',
    fontFamily: 'CeraPro Bold',
    fontWeight: 'bold',
    color: `${theme.palette.primary.main}`,
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '20px',
  },
  [theme.breakpoints.up('dm')]: {
    fontSize: '22px',
  },
}));

export const StyledReviews = styled(Link)(() => ({
  [theme.breakpoints.up('xs')]: {
    fontSize: '14px',
    color: `#3d3d3d`,
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '15px',
  },
  [theme.breakpoints.up('dm')]: {
    fontSize: '16px',
  },
}));
