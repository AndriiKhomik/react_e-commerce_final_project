import { styled } from '@mui/material/styles';

export const StyledTitle = styled('h3')(() => ({
  color: '#000',
  paddingTop: '18px',
  paddingBottom: '9px',
  fontSize: '17px',
  lineHeight: '16px',
  fontFamily: 'CeraPro Bold',
}));

export const StyledText = styled('span')(() => ({
  color: '#727272',
  fontSize: '14px',
  lineHeight: '22px',
  fontFamily: 'CeraPro Regular',
}));

// export const StyledBox = styled(Box)(() => ({
//     backgroundColor: '#fbfbfb;',
//     paddingLeft: '25px',
//     paddingRight: '25px',
//     [theme.breakpoints.up('xs')]: {
//       display: 'flex',
//       // flexDirection: 'column',
//       fontFamily: 'CeraPro Regular',
//       // justifyContent: 'space-around',
//     },
//     //   [theme.breakpoints.up('dm')]: {},
//   }));
