import { styled } from '@mui/material/styles';
import { Divider } from '@mui/material';
import theme from '../../../services/theme/theme';

export const StyledDivider = styled(Divider)(() => ({
    borderColor: [theme.palette.primary.light],
    marginBottom: '25px',
}));
