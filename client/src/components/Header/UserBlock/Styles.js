import { styled } from '@mui/material/styles';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { Badge, Button } from '@mui/material';
import theme from '../../../services/theme/theme';

export const StyledButton = styled(Button)(() => ({
  backgroundColor: `${theme.palette.primary.main}`,
  width: '100px',
  height: '40px',
  fontSize: '14px',
  color: `${theme.palette.text.light}`,
  lineHeight: 1,
  borderRadius: '6px',
  padding: '8px',
  '&:hover': {
    backgroundColor: `${theme.palette.primary.deepdark}`,
  },
}));

export const StyledLoginIcon = styled(LoginIcon)`
  margin-right: 10px;
  font-size: 18px;
`;

export const StyledLogoutIcon = styled(LogoutIcon)`
  margin-right: 8px;
  font-size: 18px;
`;

export const StyledBadge = styled(Badge)(() => ({
  span: {
    backgroundColor: `${theme.palette.primary.main}`,
  },
}));
