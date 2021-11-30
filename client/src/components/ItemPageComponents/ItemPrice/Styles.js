import { styled } from '@mui/material/styles';
import { Link } from '@mui/material';
import theme from '../../../services/theme/theme';

export const StyledPriceWrapper = styled('div')(() => ({
  [theme.breakpoints.up('xs')]: {
    marginTop: '15px',
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export const StyledReviewsWrapper = styled('div')(() => ({
  [theme.breakpoints.up('xs')]: {
    justifyContent: 'space-between',
    alignItems: 'center',
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
    marginLeft: '20px',
    fontSize: '14px',
    textDecoration: 'none',
    color: `${theme.palette.primary.main}`,
    '&:hover': {
      color: `${theme.palette.primary.deepdark}`,
      textDecoration: 'underline',
    },
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '15px',
  },
  [theme.breakpoints.up('dm')]: {
    fontSize: '16px',
  },
}));
