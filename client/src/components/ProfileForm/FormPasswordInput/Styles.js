import { styled, OutlinedInput, FormControl } from '@mui/material';
import theme from '../../../services/theme/theme';

export const StyledFormcontrol = styled(FormControl)(() => ({
  width: '100%',
  [theme.breakpoints.up('ds')]: {
    width: '49%',
  },
}));

export const StyledInput = styled(OutlinedInput)(() => ({
  '& .MuiOutlinedInput-input': {
    padding: '8.5px 14px',
  },
}));
