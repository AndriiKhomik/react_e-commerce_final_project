import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledDescriptionWrapper = styled('div')`
  margin-top: 15px;
`;

export const StyledDescriptionTitle = styled('h3')(() => ({
  [theme.breakpoints.up('xs')]: {
    fontSize: '16px',
    lineHeight: '20px',
    fontFamily: 'CeraPro Bold',
    color: `${theme.palette.text.main}`,
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '18px',
  },
  [theme.breakpoints.up('dm')]: {
    fontSize: '20px',
    lineHeight: '22px',
  },
}));

export const StyledDescription = styled('div')(() => ({
  [theme.breakpoints.up('xs')]: {
    fontSize: '13px',
    lineHeight: '19px',
    color: `${theme.palette.text.primary}`,
    marginTop: '10px',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '15px',
    lineHeight: '20px',
  },
  [theme.breakpoints.up('dm')]: {
    fontSize: '16px',
    lineHeight: '21px',
  },
}));
