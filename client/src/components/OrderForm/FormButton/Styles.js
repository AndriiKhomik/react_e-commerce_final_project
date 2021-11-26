/* eslint-disable prettier/prettier */
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledButton = styled(Button)(() => ({
    position: 'absolute',
    padding: '12px 20px',
    color: [theme.palette.text.light],
    fontSize: '15px',
    lineHeight: '16px',
    textTransform: 'capitalize',
    transition: '0.3s linear',
    bottom: '2.5%',
    '&:hover': {
        backgroundColor: [theme.palette.primary.deepdark],
    },
    [theme.breakpoints.down('md')]: {
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    [theme.breakpoints.up('ds')]: {
        bottom: '3.5%',
    },
    [theme.breakpoints.up('md')]: {
        right: '0',
        bottom: '6%',
        width: '38.3%',
    },
}));
