import { styled } from '@mui/material/styles';
import theme from '../../../../services/theme/theme';

export const StyledFormatWrapper = styled('div')(() => ({
  [theme.breakpoints.up('xs')]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    padding: '15px',
  },
  [theme.breakpoints.up('dm')]: {
    alignItems: 'center',
  },
}));

export const StyledTitle = styled('h3')(() => ({
  color: `${theme.palette.text.main}`,
  fontSize: '14px',
  [theme.breakpoints.up('sm')]: {
    lineHeight: '20px',
  },
  [theme.breakpoints.up('dl')]: {
    lineHeight: '24px',
  },
}));
