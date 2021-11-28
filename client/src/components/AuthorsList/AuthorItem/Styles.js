import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import theme from '../../../services/theme/theme';

export const StyledCardMediaWrapper = styled('div')(() => ({
  position: 'relative',
  minHeight: '243px',
  width: '100%',
  height: '100%',
}));

export const StyledCardMediaBox = styled('div')`
  display: block;
  overflow: hidden;
  position: absolute;
  inset: 0;
  box-sizing: border-box;
  margin: 0;
`;

export const StyledCardMedia = styled('img')`
  position: absolute;
  top: 0;
  inset: 0;
  padding: 0;
  border-radius: 4px;
  margin: auto;
  display: block;
  width: 0;
  height: 0;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
  object-fit: cover;
  object-position: center bottom;
`;

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
