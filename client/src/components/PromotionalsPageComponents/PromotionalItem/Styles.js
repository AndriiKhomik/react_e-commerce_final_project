import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import theme from '../../../services/theme/theme';
import { StyledBookNameText } from '../../ProductItem/BookName/Styles';

export const StyledPromoTitle = styled(StyledBookNameText)(() => ({
  marginBottom: '10px',
  minHeight: 'auto',
  fontSize: '20px',
  lineHeight: '22px',
  overflow: 'visible',
  color: [theme.palette.text.main],
  [theme.breakpoints.up('ds')]: {
    fontSize: '24px',
  },
  [theme.breakpoints.up('dm')]: {
    fontSize: '20px',
  },
}));

export const StyledImageLink = styled(Link)(() => ({
  marginBottom: '10px',
  display: 'block',
  [theme.breakpoints.up('md')]: {
    fontSize: '20px',
  },
  [theme.breakpoints.up('dl')]: {
    marginBottom: '20px',
  },
}));

export const StyledBooksLink = styled(Link)(() => ({
  color: [theme.palette.primary.main],
  textDecoration: 'none',
  transition: '0.3s linear',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

export const StyledItem = styled('li')`
  display: flex;
  flex-direction: column;
`;

export const StyledParagraph = styled('p')`
  color: ${theme.palette.text.primary};
  line-height: 22px;
`;
