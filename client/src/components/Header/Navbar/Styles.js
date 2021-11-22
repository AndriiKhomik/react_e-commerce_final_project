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
  display: 'none',
  [theme.breakpoints.up('sm')]: {
    display: 'block',
  },
}));

export const StyledUserBox = styled(Box)`
  display: flex;
  justifycontent: center;
  alignitems: center;
`;

export const StyledLink = styled('a')`
  dispay: block;
  padding-bottom: 25px;
  text-decoration: none;
  margin-right: 10px;
  color: #3d3d3d;
  white-space: nowrap;
  transition: 0.4s;
  &:hover {
    color: #f8a300;
    border-bottom: 4px solid #f8a300;
  }
`;
