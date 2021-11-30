import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledReviewsWrapper = styled('div')``;

export const StyledReviewsTitleWrapper = styled('div')(() => ({
  [theme.breakpoints.up('xs')]: {},
  [theme.breakpoints.up('dm')]: {
    display: 'flex',
    justifyContent: 'start',
    position: 'relative',
    marginBottom: '20px',
    '&::after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      height: '1px',
      width: '100%',
      top: '25px',
      left: '0',
      backgroundColor: `${theme.palette.primary.main}`,
    },
  },
}));

export const StyledReviewsTitle = styled('p')(() => ({
  [theme.breakpoints.up('xs')]: {},
  [theme.breakpoints.up('dm')]: {
    fontSize: '17px',
    lineHeight: '16px',
    marginRight: '100px',
    color: `${theme.palette.text.main}`,
  },
}));

export const StyledAnnotation = styled('p')(() => ({
  [theme.breakpoints.up('xs')]: {},
  [theme.breakpoints.up('dm')]: {
    fontSize: '15px',
    lineHeight: '25px',
    color: `${theme.palette.text.primary}`,
    marginBottom: '70px',
  },
}));