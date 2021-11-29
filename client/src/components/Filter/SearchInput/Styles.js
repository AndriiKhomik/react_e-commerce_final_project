/* eslint-disable prettier/prettier */
import { TextField, styled } from '@mui/material';
import theme from '../../../services/theme/theme';

export const StyledSearchTextField = styled(TextField)(() => ({
    marginBottom: '21px',
    '& .css-ily0j5-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline':
    {
        borderColor: [theme.palette.primary.main],
    },
    '& .MuiOutlinedInput-root': {
        borderRadius: '6px',
    },

    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: [theme.palette.primary.main],
    },
    '& .css-i4bv87-MuiSvgIcon-root': {
        fill: [theme.palette.text.gray],
    },
}));
