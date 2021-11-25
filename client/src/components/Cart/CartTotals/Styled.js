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
  border: `1px solid ${theme.palette.primary.main}`,
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
