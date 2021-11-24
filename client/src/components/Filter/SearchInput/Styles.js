import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledSearchTextField = styled(TextField)(() => ({
    marginBottom: '40px',
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
