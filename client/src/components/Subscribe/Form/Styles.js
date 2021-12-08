import { Box, Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledTextField = styled(TextField)(() => ({
  '& .css-ily0j5-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':
    {
      borderColor: [theme.palette.primary.main],
    },
  '& .MuiOutlinedInput-root': {
    borderRadius: '6px',
    borderBottomRightRadius: '0',
    borderTopRightRadius: '0',
  },

  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: [theme.palette.primary.main],
  },
  '& .css-i4bv87-MuiSvgIcon-root': {
    fill: [theme.palette.text.gray],
  },

  // '& fieldset': {
  //   borderBottomRightRadius: '0',
  //   borderTopRightRadius: '0',
  //   border: 'none',
  // },
  [theme.breakpoints.up('xs')]: {
    width: '60%',
  },
  [theme.breakpoints.up('sm')]: {
    width: '50%',
  },
  [theme.breakpoints.up('dm')]: {
    width: '65%',
  },
  [theme.breakpoints.up('bm')]: {
    width: '77%',
  },
  [theme.breakpoints.up('md')]: {
    width: '75%',
  },
  [theme.breakpoints.up('lg')]: {
    width: '83%',
  },
}));

// xs: 0,
// sr: 380,
// ds: 477,
// sm: 600,
// dm: 715,
// bm: 790,
// md: 900,
// dl: 1100,
// lg: 1200,
// xl: 1536,
// },

export const StyledButton = styled(Button)(() => ({
  [theme.breakpoints.up('xs')]: {
    borderBottomLeftRadius: '0',
    borderTopLeftRadius: '0',
    boxShadow: 'none',
    height: '100%',
    paddingTop: '8px',
    paddingBottom: '8px',
  },
}));

export const StyledBox = styled(Box)(() => ({
  [theme.breakpoints.up('xs')]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));

export const StyledTitle = styled('h3')(() => ({
  [theme.breakpoints.up('xs')]: {
    color: '#3d3d3d',
    paddingBottom: '18px',
    paddingTop: '18px',
    fontSize: '16px',
    lineHeight: '18px',
    fontFamily: 'CeraPro Bold',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '18px',
    lineHeight: '24px',
    // paddingTop: '0',
  },
}));

// xs: 0,
// sr: 380,
// ds: 477,
// sm: 600,
// dm: 715,
// bm: 790,
// md: 900,
// dl: 1100,
// lg: 1200,
// xl: 1536,
// },

export const StyledText = styled('span')(() => ({
  color: '#727272',
  paddingTop: '17px',
  fontSize: '13px',
  lineHeight: '22px',
  fontFamily: 'CeraPro Regular',
}));
