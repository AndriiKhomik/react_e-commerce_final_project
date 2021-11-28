import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledDescriptionWrapper = styled('div')`
  margin-top: 15px;
`;

export const StyledDescriptionTitle = styled('p')(() => ({
  [theme.breakpoints.up('xs')]: {
    fontSize: '14px',
    fontWeight: '500',
    color: `${theme.palette.text.main}`,
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
    lineHeight: '16px',
    color: `${theme.palette.text.primary}`,
    marginTop: '10px',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '15px',
    lineHeight: '18px',
  },
  [theme.breakpoints.up('dm')]: {
    fontSize: '16px',
    lineHeight: '20px',
  },
}));
