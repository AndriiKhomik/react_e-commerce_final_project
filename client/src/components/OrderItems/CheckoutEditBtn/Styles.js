/* eslint-disable prettier/prettier */
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledButton = styled(Link)(() => ({
    textDecoration: 'none',
    transition: '0.3s linear',
    color: [theme.palette.primary.dark],
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '16px',
    '&:hover': {
        textDecoration: 'underline',
    },
}));
