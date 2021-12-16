import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledButtonsWrapper = styled('div')`
  display: flex;
  justify-content: center;
  padding-bottom: 130px;
`;

export const StyledButton = styled(Link)`
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 4px;
  background-color: ${theme.palette.primary.main};
  &:hover {
    background-color: ${theme.palette.primary.deepdark};
  }
`;

export const StyledButtonText = styled('p')`
  color: ${theme.palette.text.light};
`;
