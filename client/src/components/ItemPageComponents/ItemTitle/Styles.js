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
    lineHeight: '25px',
    fontFamily: 'CeraPro Bold',
    fontWeight: 'bold',
    color: `${theme.palette.text.main}`,
    marginBottom: '10px',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '25px',
    lineHeight: '30px',
  },
  [theme.breakpoints.up('dm')]: {
    maxWidth: '70%',
    fontSize: '30px',
    lineHeight: '35px',
  },
}));

export const StyledGenre = styled(Link)(() => ({
  fontWeight: 'normal',
  fontSize: '15px',
  lineHeight: '16px',
  color: `${theme.palette.primary.main}`,
  textDecoration: 'none',
  '&:hover': {
    color: `${theme.palette.primary.deepdark}`,
    textDecoration: 'underline',
  },
}));
