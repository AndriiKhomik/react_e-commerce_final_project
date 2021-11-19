import { Container, List } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledContainer = styled(Container)`
  margin-bottom: 90px;
`;

export const StyledSliderWrapper = styled('ul')`
  & .swiper-button-prev,
  & .swiper-button-next {
    color: #ffac0c;
  }
`;

export const StyledList = styled(List)`
  margin: 0 auto;
`;
