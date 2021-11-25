import { styled } from '@mui/material/styles';
import { Slider } from '@mui/material';
import theme from '../../../services/theme/theme';

export const StyledSlider = styled(Slider)(() => ({
    marginTop: '20px',
    marginBottom: '15px',
}));

export const StyledPriceTag = styled('p')(() => ({
    marginBottom: '24px',
}));


export const StyledPriceValue = styled('span')(() => ({
    fontSize: '16px',
    fontWeight: '700',
    color: [theme.palette.primary.dark],
}));
