import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import theme from '../../../services/theme/theme';
import { StyledBookNameText } from '../../ProductItem/BookName/Styles';

export const StyledPromoTitle = styled(StyledBookNameText)`
  margin-bottom: 10px;
  -webkit-line-clamp: 1;
  min-height: auto;
`;

export const StyledImageLink = styled(Link)`
  margin-bottom: 20px;
  display: block;
`;

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
  display: inline;
`;
