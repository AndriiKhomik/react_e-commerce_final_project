import { Link, ListItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledListItem = styled(ListItem)`
  width: inherit;
  padding: 0;
  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export const StyledSocialLink = styled(Link)(() => ({
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'center',
  width: '30px',
  height: '30px',
  border: '1px solid #ffac0c8f',
  borderRadius: '4px',
  textAlign: 'center',
  transition: '0.3s linear',
  '&:hover': {
    borderColor: [theme.palette.primary.deepdark],
  },
  '& > .footer-icon': {
    fill: [theme.palette.background.footerIcon],
    transition: '0.3s linear',
  },
  '&:hover .footer-icon': {
    fill: [theme.palette.primary.deepdark],
  },
}));
