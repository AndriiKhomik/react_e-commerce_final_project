import { Link, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../services/theme/theme';

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
export const StyledLink = styled(Link)`
  display: block;
`;

export const SliderWrapper = styled(Box)(() => ({
  '& .swiper-pagination-bullet': {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    lineHeight: '30px',
    fontSize: '12px',
    opacity: '1',
    background: [theme.palette.primary.darkLight],
    display: 'inline-block',
    marginRight: '8px',
    cursor: 'pointer',
    transition: '0.2s',

    '&-active': {
      background: [theme.palette.primary.main],
      width: '25px',
      borderRadius: '10px',
    },
  },
}));

export const StyledImageWrapper = styled(Box)`
  & img {
    width: 100%;
  }
`;
