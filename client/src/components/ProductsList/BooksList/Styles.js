import { Box, List } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledContainer = styled(Box)(() => ({
  [theme.breakpoints.up('xs')]: {
    marginBottom: '40px',
  },
  [theme.breakpoints.up('sm')]: {
    marginBottom: '50px',
  },
  [theme.breakpoints.up('md')]: {
    marginBottom: '60px',
  },
  [theme.breakpoints.up('lg')]: {
    marginBottom: '90px',
  },
}));

export const StyledSliderWrapper = styled('div')(() => ({
  position: 'relative',
  '& .swiper': {
    maxWidth: '163px',
    position: 'static',
    [theme.breakpoints.up('ds')]: {
      maxWidth: '81%',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '89%',
    },
    [theme.breakpoints.up('dl')]: {
      maxWidth: '91%',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '86%',
    },
  },
  '& .swiper-wrapper': {
    overflow: 'visible',
  },
  '& .swiper-button-prev, & .swiper-button-next': {
    color: [theme.palette.primary.main],
  },
  '& .swiper-button-prev': {
    [theme.breakpoints.up('sr')]: {
      left: '15px',
    },
    [theme.breakpoints.up('ds')]: {
      left: '0',
    },
  },
  '& .swiper-button-next': {
    [theme.breakpoints.up('sr')]: {
      right: '15px',
    },
    [theme.breakpoints.up('ds')]: {
      right: '0',
    },
  },
}));

export const StyledList = styled(List)`
  margin: 0 auto;
`;
