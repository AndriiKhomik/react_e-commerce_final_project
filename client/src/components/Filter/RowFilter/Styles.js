/* eslint-disable prettier/prettier */
import { Box, styled, Button } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import FilterListIcon from '@mui/icons-material/FilterList';
import theme from '../../../services/theme/theme';

export const StyledBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'start',
  marginBottom: '31px',
  justifyContent: 'space-between',

}));

export const StyledFilterBtnBox = styled(Box)(() => ({
  marginBottom: '18px',
  marginRight: '20px',
  [theme.breakpoints.up('bm')]: {
    marginRight: '40px',
  },
}));

export const StyledSortingBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  marginLeft: 'auto',
  [theme.breakpoints.up('ds')]: {
    flexGrow: '1',
  },
}));

export const StyledFilterListIcon = styled(FilterListIcon)(() => ({
  [theme.breakpoints.up('dm')]: {
    marginRight: '10px',
  },
}));

export const StyledClearFilterIcon = styled(HighlightOffIcon)(() => ({
  [theme.breakpoints.up('dm')]: {
    marginRight: '10px',
  },
}));

export const StyledButton = styled(Button)(() => ({
  padding: '8px 22px',
  color: [theme.palette.text.light],
  fontSize: '16px',
  fontWeight: '700',
  boxShadow: 'none',
  textTransform: 'capitalize',
  '&:hover': {
    color: [theme.palette.text.light],
    backgroundColor: [theme.palette.primary.deepdark],
    boxShadow: 'none',
  },
  [theme.breakpoints.down('dm')]: {
    width: '50px',
    height: '45px',
    minWidth: 'auto',
  },
}));