import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import theme from '../../../services/theme/theme';

export const StyledAuthorName = styled('p')`
  margin-bottom: 10px;
  transition: 0.2s linear;
  color: #000000;
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  &:hover {
    color: #ffac0c;
    text-decoration: underline;
  }
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
