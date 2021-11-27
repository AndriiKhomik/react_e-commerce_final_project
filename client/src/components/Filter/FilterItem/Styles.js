/* eslint-disable prettier/prettier */
import { Checkbox, FormControlLabel, ListItem, styled } from '@mui/material';
import theme from '../../../services/theme/theme';

export const StyledListItem = styled(ListItem)(() => ({
    paddingLeft: '0',
    paddingRight: '0',
    paddingBottom: '3px',
    paddingTop: '3px',
    [theme.breakpoints.up('ds')]: {
        paddingLeft: '16px',
        paddingRight: '16px',
    },
}));

export const StyledCheckbox = styled(Checkbox)(() => ({
    '& .MuiSvgIcon-root': {
        fill: [theme.palette.primary.dark],
    },
}));

export const StyledFormControll = styled(FormControlLabel)(() => ({
    margin: '0',
    '& .Mui-checked+span ': {
        color: theme.palette.primary.dark,
    },
}));
