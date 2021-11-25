import { Box, Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledBoxContainer = styled(Box)`
  font-size: 15px;
  color: #3d3d3d;
`;

export const StyledBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const StyledTitle = styled(Typography)`
  font-size: 18px;
  font-weight: bold;
  color: #3d3d3d;
  padding: 8px 0 6px;
  border-bottom: 1px solid rgba(70, 163, 88, 0.5);
`;

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
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#ffffff',
  },
  '& .css-t0uf6-MuiFormControl-root-MuiTextField-root .MuiInputBase-formControl':
    {
      borderColor: 'transparent',
    },
}));

export const StyledButton = styled(Button)(() => ({
  backgroundColor: `${theme.palette.primary.main}`,
  color: '#ffffff',
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
  padding: '4px 16px',
  '&:hover': {
    backgroundColor: '#fd8502',
  },
}));
