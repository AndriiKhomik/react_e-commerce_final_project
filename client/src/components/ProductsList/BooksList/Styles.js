import { Container, List } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledContainer = styled(Container)(() => ({
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

export const StyledSliderWrapper = styled('ul')`
  & .swiper-button-prev,
  & .swiper-button-next {
    color: #ffac0c;
  }
`;

export const StyledList = styled(List)`
  margin: 0 auto;
`;
