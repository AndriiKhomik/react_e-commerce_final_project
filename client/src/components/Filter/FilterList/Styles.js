import { styled } from '@mui/material/styles';
import { List } from '@mui/material';
import theme from '../../../services/theme/theme';

export const StyledList = styled(List)(() => ({
    marginBottom: '30px',
    fontSize: '16px',
    color: [theme.palette.text.main],
}));

