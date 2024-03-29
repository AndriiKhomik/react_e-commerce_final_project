import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledPriceWrapper = styled('div')(() => ({
  [theme.breakpoints.up('xs')]: {
    marginTop: '15px',
    display: 'flex',
    justifyContent: 'flex-start',
  },
}));

export const StyledPrice = styled('p')(() => ({
  [theme.breakpoints.up('xs')]: {
    fontSize: '18px',
    fontFamily: 'CeraPro Bold',
    fontWeight: 'bold',
    color: `${theme.palette.primary.main}`,
    display: 'inline-block',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '20px',
  },
  [theme.breakpoints.up('dm')]: {
    fontSize: '22px',
  },
}));

export const StyledPreviousPrice = styled('p')(() => ({
  [theme.breakpoints.up('xs')]: {
    fontSize: '18px',
    fontFamily: 'CeraPro Regular',
    fontWeight: '400',
    color: `${theme.palette.text.gray}`,
    textDecoration: 'line-through',
    display: 'inline-block',
    marginLeft: '15px',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '20px',
  },
  [theme.breakpoints.up('dm')]: {
    fontSize: '22px',
  },
}));
