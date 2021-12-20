import { Box, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledOutBox = styled(Box)(() => ({
  marginBottom: '19px',
}));

export const StyledSpan = styled('span')(() => ({
  fontWeight: 500,
  fontSize: '18px',
}));

export const StyledYellowSpan = styled('span')(() => ({
  fontWeight: 700,
  fontSize: '18px',
  color: `${theme.palette.primary.main}`,
}));

export const StyledDivider = styled(Divider)(() => ({
  borderColor: [theme.palette.primary.light],
  marginBottom: '21px',
  paddingTop: '11px',
}));

export const StyledBtnBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'strech',
  alignItems: 'center',
}));
