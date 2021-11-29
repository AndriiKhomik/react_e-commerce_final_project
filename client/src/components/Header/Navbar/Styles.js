import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import theme from '../../../services/theme/theme';

export const StyledBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: '18px 0',
  borderBottom: `1px solid ${theme.palette.primary.main}`,
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

export const StyledLink = styled('a')(() => ({
  color: `${theme.palette.text.primary}`,
  paddingBottom: '25px',
  textDecoration: 'none',
  marginRight: '10px',
  whiteSpace: 'nowrap',
  transition: '0.4s',
  '&:hover': {
    color: `${theme.palette.primary.main}`,
    borderBottom: `4px solid ${theme.palette.primary.main}`,
  },
}));
