import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledAuthorText = styled('p')`
  grid-area: author;
  transition: 0.3s linear;
  color: ${[theme.palette.text.gray]};
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 118px;
  &:hover {
    color: ${[theme.palette.primary.main]};
    text-decoration: underline;
  }
`;
