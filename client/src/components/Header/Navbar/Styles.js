import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import theme from '../../../services/theme/theme';

export const StyledBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 18px 0;
  border-bottom: 1px solid orange;
`;

export const StyledLogoBox = styled(Box)(() => ({
  fontSize: '20px',
  [theme.breakpoints.up('sm')]: {
    display: 'block',
  },
}));

export const StyledLinkBox = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const StyledUserBox = styled(Box)`
  display: flex;
  justify-content: center;
  alignitems: center;
`;

export const StyledLink = styled('a')(() => ({
  color: `${theme.palette.text.primary}`,
  paddingBottom: '26px',
  textDecoration: 'none',
  marginRight: '10px',
  whiteSpace: 'nowrap',
  transition: '0.4s',
  '&:hover': {
    color: `${theme.palette.primary.main}`,
    borderBottom: `4px solid ${theme.palette.primary.main}`,
  },
}));
