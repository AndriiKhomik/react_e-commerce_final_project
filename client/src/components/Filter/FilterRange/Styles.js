/* eslint-disable prettier/prettier */
import { Slider, styled } from '@mui/material';
import theme from '../../../services/theme/theme';

export const StyledSlider = styled(Slider)(() => ({
    marginTop: '12px',
    marginBottom: '12px',
    marginLeft: '16px'
}));

export const StyledPriceTag = styled('p')(() => ({
    marginBottom: '22px',
    marginLeft: '16px',
    fontFamily: 'CeraPro Regular',
}));


export const StyledPriceValue = styled('span')(() => ({
    fontSize: '16px',
    fontWeight: '700',
    color: [theme.palette.primary.dark],
}));
