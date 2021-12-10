import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledWrapper = styled('div')(() => ({
  paddingTop: '21px',
}));
export const StyledTitle = styled('span')(() => ({
  fontFamily: 'CeraPro Bold',
  [theme.breakpoints.up('xs')]: {
    color: `${theme.palette.text.dark}`,
    paddingRight: '0',
    paddingLeft: '0',
  },
  [theme.breakpoints.up('sm')]: {},
  [theme.breakpoints.up('dm')]: {
    fontSize: '14px',
    lineHeight: '16px',
  },
}));

export const StyledContent = styled('span')(() => ({
  [theme.breakpoints.up('xs')]: {
    color: `${theme.palette.text.main}`,
    fontWeight: '500',
    paddingRight: '0',
    paddingLeft: '0',
    marginLeft: '10px',
  },
  [theme.breakpoints.up('dm')]: {
    fontSize: '14px',
    lineHeight: '16px',
  },
}));
