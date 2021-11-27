/* eslint-disable prettier/prettier */
import { Drawer, Box, styled } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import theme from '../../services/theme/theme';

export const StyledFilterContainer = styled(Drawer)(() => ({
    width: '300px',
    flexShrink: 0,
    [theme.breakpoints.up('md')]: {
        width: '320px',
    },
    '& .MuiDrawer-paper': {
        width: '300px',
        borderRadius: '4px',
        boxSizing: 'border-box',
        padding: '0 19px 20px',
        backgroundColor: [theme.palette.background.filter],
        [theme.breakpoints.up('md')]: {
            width: '320px',
        },
    },
}));

export const StyledBox = styled(Box)(() => ({
    marginBottom: '30px',
}));

export const StyledFilterListIcon = styled(FilterListIcon)(() => ({
    [theme.breakpoints.up('sm')]: {
        marginRight: '10px',
    },
}));
