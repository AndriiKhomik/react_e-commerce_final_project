/* eslint-disable prettier/prettier */
import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledSubtitle = styled('p')(() => ({
    fontSize: '18px',
    fontWeight: '700',
    color: [theme.palette.text.main],
    fontFamily: 'CeraPro Regular',
}));
