import { Box, Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledBoxContainer = styled(Box)(() => ({
  fontSize: '15px',
  color: `${theme.palette.text.main}`,
}));

export const StyledBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const StyledTitle = styled(Typography)(() => ({
  fontSize: '18px',
  fontWeight: 'bold',
  padding: '8px 0 6px',
  borderBottom: `1px solid ${theme.palette.primary.main}`,
}));

export const StyledParagraph = styled(Typography)`
  padding: 12px 0 10px;
  font-size: 14px;
`;

export const StyledTextField = styled(TextField)(() => ({
  flex: 1,
  borderRadius: 0,
  '& .MuiInputBase-formControl': {
    border: `1px solid ${theme.palette.primary.main}`,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    '&:hover': {
      border: '1px solid transparent',
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: `${theme.palette.text.light}`,
  },
  '& .css-t0uf6-MuiFormControl-root-MuiTextField-root .MuiInputBase-formControl':
    {
      borderColor: 'transparent',
    },
}));

export const StyledButton = styled(Button)(() => ({
  backgroundColor: `${theme.palette.primary.main}`,
  color: `${theme.palette.text.light}`,
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
  padding: '4px 16px',
  textTransform: 'capitalize',
  '&:hover': {
    backgroundColor: `${theme.palette.primary.deepdark}`,
  },
}));
