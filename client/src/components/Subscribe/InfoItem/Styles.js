import { styled } from '@mui/material/styles';

export const StyledTitle = styled('h3')(()=>({
    color: 'red',
    paddingTop: '18px',
    paddingBottom: '9px',
    fontSize: '17px',
    lineHeight: '16px',
    fontFamily: 'CeraPro Bold',
}));


export const StyledText = styled('span')`
  //   font-size: 18px;
`;


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