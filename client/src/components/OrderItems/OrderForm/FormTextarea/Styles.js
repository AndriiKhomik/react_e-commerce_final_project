/* eslint-disable prettier/prettier */
import { ErrorMessage } from 'formik';
import { styled } from '@mui/material/styles';
import theme from '../../../../services/theme/theme';

export const StyledErrorMessage = styled(ErrorMessage)(() => ({
    position: 'absolute',
    fontSize: '14px',
    color: [theme.palette.primary.accent],
}));
