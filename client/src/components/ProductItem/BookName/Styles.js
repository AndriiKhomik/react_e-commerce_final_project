import { styled } from '@mui/material/styles';

export const StyledBookNameText = styled('p')`
  min-height: 36px;
  margin-bottom: 14px;
  transition: 0.2s linear;
  color: #000000;
  text-decoration: none;
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  &:hover {
    color: #ffac0c;
    text-decoration: underline;
  }
`;
