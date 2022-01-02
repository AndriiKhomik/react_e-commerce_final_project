import { styled, Box } from '@mui/material';
import theme from '../../../services/theme/theme';

export const StyledWrapper = styled(Box)(() => ({
    marginBottom: '125px',
    fontWeight: '700',
    fontSize: '17px',
    lineHeight: '17px',
    color: [theme.palette.text.main],
}));

