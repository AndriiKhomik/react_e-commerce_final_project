/* eslint-disable prettier/prettier */
import { List } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../Footer/StylesBreakpoints';

export const StyledList = styled(List)(() => ({
    [theme.breakpoints.up('xs')]: {
        display: 'grid',
        rowGap: '1rem',
        fontSize: '14px',
    },
    [theme.breakpoints.up('ds')]: {
        gridTemplateColumns: 'repeat(3, 1fr)',
        columnGap: '1rem',
    },
    [theme.breakpoints.up('sm')]: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    [theme.breakpoints.up('dm')]: {
        fontSize: '16px',
    },
    [theme.breakpoints.up('md')]: {
        justifyContent: 'space-evenly',
    },
}));
