/* eslint-disable prettier/prettier */
import { InputLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../../services/theme/theme';

export const StyledLabel = styled(InputLabel)(() => ({
    marginBottom: '10px',
    color: [theme.palette.text.main],
    fontSize: '16px',
    lineHeight: '16px',
}));

export const StyledTag = styled('span')(() => ({
    color: [theme.palette.primary.accent],
}));
