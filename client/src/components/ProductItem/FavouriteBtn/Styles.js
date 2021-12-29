import { CardActions, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledFavouriteBtnBox = styled(CardActions)(() => ({
  [theme.breakpoints.up('xs')]: {
    position: 'absolute',
    padding: '0',
    zIndex: '2',
    top: '8px',
    right: '8px',
    backgroundColor: `${[theme.palette.text.light]}`,
    borderRadius: '4px',
  },
  [theme.breakpoints.up('dl')]: {
    opacity: '0',

    '&:hover': {
      opacity: '1',
    },
  },
}));

export const StyledFavouriteBtn = styled(Button)`
  min-width: inherit;
  padding: 8px;
  color: ${[theme.palette.primary.dark]};
  &:hover {
    background-color: ${[theme.palette.text.light]};
  }
`;
