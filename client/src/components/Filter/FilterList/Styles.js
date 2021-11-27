/* eslint-disable prettier/prettier */
import { List, styled } from '@mui/material';
import theme from '../../../services/theme/theme';

export const StyledList = styled(List)(() => ({
    marginBottom: '10px',
    fontSize: '16px',
    color: [theme.palette.text.main],
}));


