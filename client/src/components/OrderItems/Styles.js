import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../services/theme/theme';

export const StyledTitle = styled('p')(() => ({
    marginBottom: '20px',
    fontWeight: '700',
    fontSize: '17px',
    lineHeight: '17px',
    color: [theme.palette.text.main],
}));

export const StyledBox = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
}));

export const StyledSubtitleSpan = styled('span')(() => ({
    fontWeight: 700,
    fontSize: '16px',
}));

export const StyledYellowSpan = styled('span')(() => ({
    fontWeight: 700,
    fontSize: '18px',
    color: `${theme.palette.primary.main}`,
}));