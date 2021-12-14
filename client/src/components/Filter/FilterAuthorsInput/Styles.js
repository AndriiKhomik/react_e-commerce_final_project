import { styled, FormControl } from '@mui/material';
import theme from '../../../services/theme/theme';

export const StyledFormControl = styled(FormControl)(() => ({
    marginBottom: '15px',

    '& .MuiOutlinedInput-root': {
        borderRadius: '6px',
    },
    '& .MuiInputBase-input': {
        fontSize: '15px',
        color: [theme.palette.text.main],
        borderRadius: '6px',
    },
}));
