/* eslint-disable prettier/prettier */
import { Link, List } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../services/theme/theme';

export const StyledList = styled(List)`
  display: flex;
  margin-bottom: 36px;
`;

export const StyledItem = styled('li')(() => ({
    '&:not(:last-child)': {
        marginRight: '21px',
        ' &::after': {
            content: '"/"',
            position: 'absolute',
            marginLeft: '7px',
        },
    },
}));

export const StyledLink = styled(Link)(() => ({
    color: [theme.palette.text.main],
    textDecoration: 'none',
    transition: '0.3s linear',
    '&:hover': {
        color: [theme.palette.primary.main],
        textDecoration: 'underline',
    },
}));
