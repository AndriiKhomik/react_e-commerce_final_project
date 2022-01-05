import { DialogContent, Dialog } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../services/theme/theme';

export const StyledDialog = styled(Dialog)(() => ({
  ' & .css-1og2ouz-MuiPaper-root-MuiDialog-paper': {
    margin: 0,
  },
}));

export const StyledModal = styled(DialogContent)(() => ({
  width: '250px',
  minHeight: '50px',
  textAlign: 'center',
  background: '#fff',
  margin: 0,
  [theme.breakpoints.up('ds')]: {
    width: '400px',
  },
}));

export const StyledIconBox = styled('div')(() => ({
  '& svg': {
    fontSize: '40px',
    display: 'block',
    margin: '0 auto 30px auto',
  },
}));
