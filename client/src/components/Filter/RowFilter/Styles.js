/* eslint-disable prettier/prettier */
import { Box, styled } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import theme from '../../../services/theme/theme';

export const StyledBox = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    marginBottom: '31px',
    [theme.breakpoints.up('ds')]: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
}));

export const StyledFilterBtnBox = styled(Box)(() => ({
    marginRight: '14px',
    marginBottom: '18px',
    [theme.breakpoints.up('ds')]: {
        marginBottom: '0',
    },
    [theme.breakpoints.up('dm')]: {
        marginRight: '38px',
    },
}));

export const StyledSortingBox = styled(Box)(() => ({
    [theme.breakpoints.up('ds')]: {
        display: 'flex',
        flexGrow: '1',
        justifyContent: 'space-between',
    },
}));

export const StyledFilterListIcon = styled(FilterListIcon)(() => ({
    [theme.breakpoints.up('sm')]: {
        marginRight: '10px',
    },
}));
