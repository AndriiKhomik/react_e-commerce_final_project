/* eslint-disable prettier/prettier */
import { List } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../services/theme/theme';

export const StyledList = styled(List)(() => ({
    [theme.breakpoints.up('xs')]: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 163px)',
        justifyContent: 'center',
        columnGap: '5%',
        rowGap: '30px',
        marginBottom: '90px',
        padding: '0',
    },

    [theme.breakpoints.up('ds')]: {
        columnGap: '6%',
    },

    [theme.breakpoints.up('dm')]: {
        gridTemplateColumns: 'repeat(3, 215px)',
        columnGap: '3%',
    },
    [theme.breakpoints.up('md')]: {
        columnGap: '5%',
    },
    [theme.breakpoints.up('dl')]: {
        gridTemplateColumns: 'repeat(6, 163px)',
        columnGap: '2%',
    },

    [theme.breakpoints.up('lg')]: {
        gridTemplateColumns: 'repeat(6, 163px)',
        columnGap: '34px',
        paddingLeft: "24px",
        paddingRight: "24px",
    },
}));
