import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffac0c',
      dark: '#f8a300',
      light: 'rgba(255, 172, 12, 0.22)',
      darkLight: 'rgba(255, 185, 0, 0.5)',
      deepdark: '#fd8502',
      accent: '#f03800',
    },
    text: {
      main: '#3d3d3d',
      primary: '#727272',
      light: '#ffffff',
      gray: '#A5A5A5',
      dark: '#000',
    },
    background: {
      paper: '#e5e5e5',
      default: '#e5e5e5',
      grayBc: '#fbfbfb',
      footerBc: '#ffac0c26',
      footerIcon: '#f5a70d',
    },
  },
  typography: {
    fontSize: 14,
    fontFamily: ['CeraPro Regular', 'CeraPro Bold', 'CeraPro Black'].join(','),
  },
  breakpoints: {
    values: {
      xs: 0,
      ds: 477,
      sm: 600,
      dm: 715,
      bm: 790,
      md: 900,
      dl: 1100,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        size: 'small',
      },
    },
  },
});

export default theme;
