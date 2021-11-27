/* eslint-disable prettier/prettier */
import { Divider, styled } from '@mui/material';
import theme from '../../../services/theme/theme';

export const StyledDivider = styled(Divider)(() => ({
    borderColor: [theme.palette.primary.light],
    marginBottom: '15px',
}));
