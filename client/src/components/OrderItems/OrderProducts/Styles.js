import { Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledDivider = styled(Divider)(() => ({
  borderColor: [theme.palette.primary.light],
  marginBottom: '11px',
}));

export const StyledLink = styled(Link)(() => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  textDecoration: 'none',
  '&:hover': {
    cursor: 'pointer',
  },
}));
export const StyledImg = styled('img')(() => ({
  marginRight: '10px',
}));

export const SryledListItem = styled('li')(() => ({
  display: 'grid',
  gridTemplateColumns: 'auto 30px 40px',
  columnGap: '7px',
  alignItems: 'center',
  marginBottom: '10px',
  paddingRight: '10px',
  paddingLeft: '10px',
  backgroundColor: [theme.palette.background.grayBc],
  [theme.breakpoints.up('md')]: {
    columnGap: '10px',
  },
}));

export const StyledBookNameSpan = styled('span')(() => ({
  marginBottom: '8px',
  color: `${theme.palette.text.main}`,
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '18px',
  display: '-webkit-box',
  webkitLineClamp: '2',
  webkitBoxOrient: 'vertical',
  overflow: 'hidden',
}));

export const StyledSpan = styled('span')(() => ({
  fontWeight: 500,
  fontSize: '16px',
}));

export const StyledSmallSpan = styled('span')(() => ({
  fontWeight: 400,
  fontSize: '14px',
  color: [theme.palette.text.primary],
}));

export const StyledBookCodeSpan = styled('span')(() => ({
  color: [theme.palette.text.gray],
}));
