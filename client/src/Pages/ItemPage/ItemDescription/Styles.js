import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledDescriptionWrapper = styled('div')(() => ({
  [theme.breakpoints.up('xs')]: {},
  [theme.breakpoints.up('sm')]: {},
  [theme.breakpoints.up('dm')]: {
    marginTop: '20px',
  },
}));

export const StyledDescriptionTitle = styled('p')(() => ({
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

export const StyledDescription = styled('p')(() => ({
  [theme.breakpoints.up('xs')]: {
    fontSize: '14px',
    color: `${theme.palette.text.primary}`,
    marginTop: '10px',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '15px',
  },
  [theme.breakpoints.up('dm')]: {
    fontSize: '16px',
  },
}));
