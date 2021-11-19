import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledTitle = styled('p')(() => ({
  [theme.breakpoints.up('xs')]: {
    marginBottom: '20px',
    paddingBottom: '10px',
    borderBottom: '0.3px solid #f7bc47',
    fontSize: '20px',
    fontWeight: '700',
    lineHeight: '16px',
    color: '#ffac0c',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '25px',
    marginBottom: '25px',
    paddingBottom: '15px',
  },
  [theme.breakpoints.up('dm')]: {
    fontSize: '30px',
    marginBottom: '35px',
  },
}));
