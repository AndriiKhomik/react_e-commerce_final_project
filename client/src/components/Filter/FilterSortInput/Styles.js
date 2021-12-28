/* eslint-disable prettier/prettier */
import { styled, FormControl, Select } from '@mui/material';

import theme from '../../../services/theme/theme';

export const StyledFormControl = styled(FormControl)(() => ({
  width: '163px',
  '& .MuiInputBase-input': {
    fontSize: '15px',
    color: [theme.palette.text.main],
  },
  [theme.breakpoints.up('ds')]: {
    width: '144px',
  },
  [theme.breakpoints.up('sm')]: {
    width: '163px',
  },
  '& .css-ejjenx-MuiInputBase-root-MuiOutlinedInput-root': {
    lineHeight: '1em',
    fontSize: '1rem',
  }
}));

export const StyledSelect = styled(Select)(() => ({
  '& .css-1ow7kc4-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.MuiSelect-select': {
    height: '12px',
    minHeight: 'auto',
    padding: '13px 14px 20px',
  },
}));
