import { styled } from '@mui/material/styles';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { Badge, Button } from '@mui/material';

export const StyledButton = styled(Button)`
  background-color: #ffac0c;
  font-size: 14px;
  color: #ffffff;
  line-height: 1;
  border-radius: 6px;
  padding: 8px;
  &:hover {
    background-color: #cf8400;
  }
`;

export const StyledLoginIcon = styled(LoginIcon)`
  margin-right: 10px;
  font-size: 18px;
`;

export const StyledLogoutIcon = styled(LogoutIcon)`
  margin-right: 8px;
  font-size: 18px;
`;

export const StyledBadge = styled(Badge)`
  span {
    background-color: #ffac0c;
  }
`;
