import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledFormTitle = styled('p')(() => ({
  [theme.breakpoints.up('xs')]: {
    cursor: 'pointer',
    margin: '0 12px',
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '16px',
  },
}));
