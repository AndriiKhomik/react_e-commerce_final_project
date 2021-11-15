/* eslint-disable prettier/prettier */
import { styled } from '@mui/material/styles';
import { List, Link, ListItem } from '@mui/material';
import theme from '../Footer/StylesBreakpoints';

export const StyledList = styled(List)(() => ({
    display: 'grid',
    justifyContent: 'center',
    gridTemplateColumns: 'repeat(2, 120px)',
    columnGap: '1.2rem',
    rowGap: '0.2rem',
    padding: '0 0 20px 0',
    [theme.breakpoints.up('ds')]: {
        gridTemplateColumns: 'repeat(3, 120px)',
        rowGap: '0.5rem',
    },
    [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: 'repeat(3, 1fr)',
        columnGap: '0.5rem',
    },
    [theme.breakpoints.up('md')]: {
        gridTemplateColumns: 'repeat(4, 1fr)',
    },
    [theme.breakpoints.up('dl')]: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0',
    },
}));

export const StyledItem = styled(ListItem)(() => ({
    width: 'inherit',
    padding: '0',
    [theme.breakpoints.up('md')]: {
        marginRight: '30px',
    },
}));

export const StyledLink = styled(Link)`
  padding: 0;
  color: #3d3d3d;
  text-decoration: none;
  transition: 0.3s linear;
  &:hover {
    color: #ffac0c;
  }
`;
