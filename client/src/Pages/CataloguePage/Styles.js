/* eslint-disable prettier/prettier */
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import theme from '../../services/theme/theme';

export const StyledGrid = styled(Grid)(() => ({
    position: 'relative',
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

export const StyledFilterGrid = styled(Grid)(() => ({
    padding: '55px 19px 205px',
    backgroundColor: [theme.palette.background.filter],
    borderRadius: '4px',
}));

