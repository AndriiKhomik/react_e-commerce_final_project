import { styled } from '@mui/material/styles';

export const StyledAuthorText = styled('p')`
  grid-area: author;
  transition: 0.3s linear;
  color: #a5a5a5;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 118px;
  &:hover {
    color: #ffac0c;
    text-decoration: underline;
  }
`;
