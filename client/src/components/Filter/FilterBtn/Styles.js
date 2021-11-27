/* eslint-disable prettier/prettier */
import { Button, styled } from '@mui/material';
import theme from '../../../services/theme/theme';

export const StyledButton = styled(Button)(() => ({
    padding: '8px 15px',
    color: [theme.palette.text.light],
    fontSize: '16px',
    fontWeight: '700',
    boxShadow: 'none',
    '&:hover': {
        color: [theme.palette.text.light],
        boxShadow: 'none',
    },
}));
