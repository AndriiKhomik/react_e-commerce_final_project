import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledReviewsWrapper = styled('div')``;

export const StyledReviewsTitleWrapper = styled('div')(() => ({
  [theme.breakpoints.up('xs')]: {
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
  [theme.breakpoints.up('dm')]: {},
}));

export const StyledReviewsTitle = styled('p')(() => ({
  [theme.breakpoints.up('xs')]: {
    fontWeight: '700',
    fontSize: '17px',
    lineHeight: '16px',
    marginRight: '100px',
    paddingBottom: '6px',
    color: `${theme.palette.primary.main}`,
    borderBottom: `4px solid ${theme.palette.primary.main}`,
  },
  [theme.breakpoints.up('dm')]: {},
}));

export const StyledAnnotation = styled('div')(() => ({
  [theme.breakpoints.up('xs')]: {
    fontSize: '15px',
    lineHeight: '25px',
    color: `${theme.palette.text.primary}`,
    display: 'grid',
    rowGap: '8px',
    marginBottom: '70px',
  },
  [theme.breakpoints.up('dm')]: {},
}));
