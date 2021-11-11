import { Grid, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from './StylesBreakpoints';

export const StyledUpperBox = styled(Box)`
  padding: 23px 0;
  background-color: #ffac0c26;
`;

export const StyledDownBox = styled(Box)(() => ({
    backgroundColor: '#fbfbfb',
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

export const StyledParagraph = styled(Typography)`
  font-family: inherit;
  text-align: center;
  color: #3d3d3d;
`;
