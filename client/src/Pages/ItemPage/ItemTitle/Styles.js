import { styled } from '@mui/material/styles';
import { Link } from '@mui/material';
import theme from '../../../services/theme/theme';

export const StyledTitleWrapper = styled('div')(() => ({
  [theme.breakpoints.up('dm')]: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
}));

export const StyledTitle = styled('h3')(() => ({
  [theme.breakpoints.up('xs')]: {
    fontSize: '20px',
    fontFamily: 'CeraPro Bold',
    fontWeight: 'bold',
    color: `${theme.palette.primary.main}`,
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '25px',
  },
  [theme.breakpoints.up('dm')]: {
    fontSize: '30px',
  },
}));

export const StyledGenre = styled(Link)`
  font-weight: normal;
  font-size: 15px;
  line-height: 16px;
  color: {theme.palette.primary.main};
`;
