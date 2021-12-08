import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import theme from '../../services/theme/theme';

export const StyledGrid = styled(Grid)(() => ({
    [theme.breakpoints.up('xs')]: {
        marginBottom: '28px',
    },
    [theme.breakpoints.up('sm')]: {
        marginBottom: '38px',
    },
    [theme.breakpoints.up('md')]: {
        marginBottom: '48px',
    },
    [theme.breakpoints.up('lg')]: {
        marginBottom: '65px',
    },
}));


export const StyledFormGrid = styled(Grid)(() => ({
    [theme.breakpoints.up('xs')]: {
        marginBottom: '18px',
    },
    [theme.breakpoints.up('sm')]: {
        marginBottom: '26px',
    },
    [theme.breakpoints.up('md')]: {
        marginBottom: '0',
    },
}));

export const StyledOrderTotalsGrid = styled(Grid)(() => ({
    marginTop: '36px',
    [theme.breakpoints.up('md')]: {
        marginTop: '0',
    },
}));
