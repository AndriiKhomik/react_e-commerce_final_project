import { styled } from '@mui/material/styles';
import { List, Checkbox } from '@mui/material';
import theme from '../../../services/theme/theme';

export const StyledList = styled(List)(() => ({
    marginBottom: '30px',
    fontSize: '16px',
    color: [theme.palette.text.main],
}));

export const StyledCheckbox = styled(Checkbox)(() => ({
    '& .MuiSvgIcon-root': {
        fill: [theme.palette.primary.dark],
    },
}));
