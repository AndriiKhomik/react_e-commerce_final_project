import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledBookNameText = styled('p')`
  margin-bottom: 14px;
  transition: 0.2s linear;
  color: ${[theme.palette.text.dark]};
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  &:hover {
    color: ${[theme.palette.primary.main]};
    text-decoration: underline;
  }
`;
