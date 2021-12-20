import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import ModalUnstyled from '@mui/base/ModalUnstyled';
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
  font-family: ${theme.typography.fontFamily};
  overflow: scroll;
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
    maxWidth: '280px',
    backgroundColor: `${theme.palette.text.light}`,
    borderBottom: `10px solid ${theme.palette.primary.dark}`,
    position: 'relative',
    padding: '30px 50px',
    display: 'flex',
    flexDirection: 'column',
  },
  [theme.breakpoints.up('sm')]: {
    width: '350px',
    padding: '45px 60px',
  },
}));

export const StyledCloseBtnDiv = styled('div')`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`;
export const StyledLoginTitleWrapper = styled('div')`
  display: flex;
  margin: 0 auto;
`;

export const StyledTitleDelimiter = styled('div')`
  width: 1px;
  height: 15px;
  background-color: ${theme.palette.text.main};
`;

export const StyledFormWrapper = styled('div')`
  margin-top: 15px;
  display: grid;
  row-gap: 30px;
  height: 70%;
`;
export const StyledServerErrorWrapper = styled('div')`
  height: 20px;
`;

export const StyledServerError = styled('p')`
  height: 20px;
  color: red;
`;
