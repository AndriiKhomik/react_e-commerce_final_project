import { ErrorMessage } from 'formik';
import { InputLabel, Checkbox } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../services/theme/theme';

export const StyledTitle = styled('p')(() => ({
  marginBottom: '20px',
  fontWeight: '700',
  fontSize: '17px',
  lineHeight: '17px',
  color: [theme.palette.text.main],
}));

export const StyledTag = styled('span')`
  color: #f03800;
`;

export const StyledLabel = styled(InputLabel)(() => ({
  marginBottom: '10px',
  color: [theme.palette.text.main],
  fontSize: '16px',
  lineHeight: '16px',
}));
export const StyledCheckbox = styled(Checkbox)(() => ({
  '& .css-i4bv87-MuiSvgIcon-root': {
    fill: [theme.palette.primary.main],
  },
}));

export const StyledErrorMessage = styled(ErrorMessage)`
  padding-top: 6px;
  color: #f03800;
  font-size: 14px;
`;
