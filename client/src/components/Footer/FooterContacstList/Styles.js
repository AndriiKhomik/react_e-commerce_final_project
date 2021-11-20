/* eslint-disable prettier/prettier */
import { List } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledList = styled(List)(() => ({
    [theme.breakpoints.up('xs')]: {
        display: 'grid',
        rowGap: '1rem',
        fontSize: '15px',
    },
    [theme.breakpoints.up('dm')]: {
        gridTemplateColumns: 'repeat(3, auto)',
        columnGap: '0.5rem',
    },
    [theme.breakpoints.up('md')]: {
        justifyContent: 'space-evenly',
        fontSize: '16px',
    },
}));
