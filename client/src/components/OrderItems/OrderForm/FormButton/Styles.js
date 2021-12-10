/* eslint-disable prettier/prettier */
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../../services/theme/theme';

export const StyledButton = styled(Button)(() => ({
    // position: 'absolute',
    padding: '12px 20px',
    marginBottom: '12px',
    width: '100%',
    color: [theme.palette.text.light],
    fontSize: '15px',
    lineHeight: '16px',
    textTransform: 'capitalize',
    transition: '0.3s linear',
    bottom: '2.5%',
    boxShadow: 'none',
    '&:hover': {
        backgroundColor: [theme.palette.primary.deepdark],
        boxShadow: 'none',
    },
    // [theme.breakpoints.down('md')]: {
    //     left: '50%',
    //     transform: 'translate(-50%, -50%)',
    // },
    // [theme.breakpoints.up('ds')]: {
    //     bottom: '3.5%',
    // },
    // [theme.breakpoints.up('md')]: {
    //     right: '0',
    //     bottom: '6%',
    //     // width: '38.3%',
    // },
}));
