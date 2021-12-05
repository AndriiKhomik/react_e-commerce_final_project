import { ErrorMessage } from 'formik';
import { styled } from '@mui/material/styles';
import theme from '../../../../services/theme/theme';

export const StyledErrorMessage = styled(ErrorMessage)(() => ({
  position: 'absolute',
  paddingTop: '2px',
  fontSize: '13px',
  color: [theme.palette.primary.accent],
}));
