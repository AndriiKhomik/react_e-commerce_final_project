/* eslint-disable prettier/prettier */
import { styled, FormControl } from '@mui/material';
import theme from '../../../services/theme/theme';

export const StyledFormControl = styled(FormControl)(() => ({
    width: '163px',
    '& .MuiInputBase-input': {
        fontSize: '15px',
        color: [theme.palette.text.main],
    },
    [theme.breakpoints.up('ds')]: {
        width: '144px',
    },
    [theme.breakpoints.up('sm')]: {
        width: '163px',
    },
}));
