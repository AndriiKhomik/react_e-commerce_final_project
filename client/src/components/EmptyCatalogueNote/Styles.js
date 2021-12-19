import { styled } from '@mui/material';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import theme from '../../services/theme/theme';

export const StyledNote = styled('p')(() => ({
  color: [theme.palette.text.main],
  fontSize: '18px',
  lineHeight: '30px',
  [theme.breakpoints.up('xs')]: {
    marginBottom: '40px',
  },
  [theme.breakpoints.up('sm')]: {
    marginBottom: '50px',
  },
  [theme.breakpoints.up('md')]: {
    marginBottom: '60px',
  },
  [theme.breakpoints.up('lg')]: {
    marginBottom: '90px',
  },
}));

export const StyledIcon = styled(TravelExploreOutlinedIcon)(() => ({
  fill: [theme.palette.primary.main],
}));
