import { Box, List } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledContainer = styled(Box)(() => ({
  [theme.breakpoints.up('xs')]: {
    marginBottom: '30px',
  },
}));

export const StyledSliderWrapper = styled('ul')(() => ({
  '& .swiper': {
    paddingBottom: '70px',
  },
  '& .swiper-button-prev, & .swiper-button-next': {
    color: [theme.palette.primary.main],
    top: '95%',
  },
  '& .swiper-pagination-bullet-active': {
    background: [theme.palette.primary.main],
  }
}));

export const StyledList = styled(List)`
  margin: 0 auto;
`;
