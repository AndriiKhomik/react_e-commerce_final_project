import { styled } from '@mui/material/styles';
import { Checkbox } from '@mui/material';
import theme from '../../../services/theme/theme';

export const StyledCheckbox = styled(Checkbox)(() => ({
    '& .MuiSvgIcon-root': {
        fill: [theme.palette.primary.dark],
    },
}));
