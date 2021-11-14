import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffac0c',
      dark: '#f8a300',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      ds: 477,
      sm: 600,
      dm: 715,
      md: 900,
      dl: 1100,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
