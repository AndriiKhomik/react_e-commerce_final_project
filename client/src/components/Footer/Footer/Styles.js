import { Grid, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledUpperBox = styled(Box)(() => ({
  padding: '23px 0',
  backgroundColor: [theme.palette.background.footerBc],
}));

export const StyledDownBox = styled(Box)(() => ({
  backgroundColor: [theme.palette.background.grayBc],
  padding: '15px 0',
  [theme.breakpoints.up('md')]: {
    padding: '32px 0',
  },
}));

export const StyledUpperGrid = styled(Grid)`
  align-items: center;
`;

export const StyledDownGrid = styled(Grid)(() => ({
  alignItems: 'start',
  [theme.breakpoints.up('dl')]: {
    alignItems: 'center',
  },
}));

export const StyledParagraph = styled(Typography)(() => ({
  fontFamily: 'inherit',
  textAlign: 'center',
  color: [theme.palette.text.main],
}));
