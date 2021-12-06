import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ModalUnstyled } from '@mui/base';
import theme from '../../services/theme/theme';

export const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

export const StyledBox = styled(Box)(() => ({
  [theme.breakpoints.up('xs')]: {
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    p: 2,
    px: 4,
    pb: 3,
  },
  [theme.breakpoints.up('sm')]: {},
  [theme.breakpoints.up('dm')]: {},
}));
