import { Link, ListItem } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledListItem = styled(ListItem)`
  width: inherit;
  padding: 0;
  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export const StyledSocialLink = styled(Link)`
  display: grid;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 1px solid #ffac0c8f;
  border-radius: 4px;
  text-align: center;
  transition: 0.3s linear;
  &:hover {
    border-color: #fd8502;
  }
`;
