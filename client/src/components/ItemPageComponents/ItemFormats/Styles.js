import { List } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledFormatsWrapper = styled('div')(() => ({
  [theme.breakpoints.up('xs')]: {
    marginTop: '15px',
  },
  [theme.breakpoints.up('dm')]: {
    marginTop: '20px',
  },
}));

export const StyledFormatTitle = styled('h3')`
  color: {theme.palette.text.main};
  font-size: 15px;
  line-height: 16px;
`;

export const StyledList = styled(List)(() => ({
  [theme.breakpoints.up('xs')]: {
    marginTop: '10px',
  },
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
    paddingRight: '10px',
  },
}));
