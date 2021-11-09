import { List } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledList = styled(List)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 215px)',
        justifyContent: 'end',
        columnGap: '96px',
        rowGap: '60px',
    },
}));
