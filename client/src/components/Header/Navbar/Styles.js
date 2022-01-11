import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import theme from '../../../services/theme/theme';

export const StyledBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '18px 0',
  borderBottom: `1px solid ${theme.palette.primary.main}`,
  backgroundColor: `${theme.palette.text.light}`,
  position: 'fixed',
  zIndex: '100',
  top: 0,
  maxWidth: '1152px',
  boxShadow: '0px 8px 7px -5px rgb(180, 175, 175, 30%)',
  left: '16px',
  right: '16px',
  [theme.breakpoints.up('sm')]: {
    left: '24px',
    right: '24px',
  },
  [theme.breakpoints.up('lg')]: {
    margin: '0 auto',
  },
}));

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

export const StyledLink = styled(NavLink)(() => ({
  color: `${theme.palette.text.primary}`,
  paddingBottom: '26px',
  textDecoration: 'none',
  marginRight: '10px',
  whiteSpace: 'nowrap',
  transition: '0.4s linear',
  borderBottom: `4px solid transparent`,
  '&:hover': {
    color: `${theme.palette.primary.main}`,
    borderBottom: `4px solid ${theme.palette.primary.main}`,
  },
  '&.selected': {
    color: `${theme.palette.primary.main}`,
  },
}));
