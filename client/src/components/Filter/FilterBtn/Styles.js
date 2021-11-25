import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import theme from '../../../services/theme/theme';

export const StyledButton = styled(Button)(() => ({
    padding: '8px 25px',
    color: [theme.palette.text.light],
    fontSize: '16px',
    fontWeight: '700',
}));
