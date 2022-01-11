/* eslint-disable prettier/prettier */
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../../services/theme/theme';

export const StyledButton = styled(Button)(() => ({
    padding: '12px 20px',
    marginBottom: '12px',
    width: '100%',
    color: [theme.palette.text.light],
    fontSize: '15px',
    lineHeight: '16px',
    textTransform: 'capitalize',
    transition: '0.3s linear',
    boxShadow: 'none',
    '&:hover': {
        backgroundColor: [theme.palette.primary.deepdark],
        boxShadow: 'none',
    },
}));
