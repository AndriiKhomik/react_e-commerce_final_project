import { Link, ListItem, List } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledItemInfoWrapper = styled('div')`
  display: flex;
  justify-content: start;
`;

export const StyledListItemTitles = styled(ListItem)(() => ({
  [theme.breakpoints.up('xs')]: {
    color: `${theme.palette.text.primary}`,
    paddingRight: '0',
    paddingLeft: '0',
  },
  [theme.breakpoints.up('sm')]: {},
  [theme.breakpoints.up('dm')]: {
    fontSize: '14px',
    lineHeight: '16px',
  },
}));

export const StyledListItem = styled(ListItem)(() => ({
  [theme.breakpoints.up('xs')]: {
    color: `${theme.palette.text.main}`,
    fontWeight: '500',
    paddingRight: '0',
    paddingLeft: '0',
    marginLeft: '10px',
  },
  [theme.breakpoints.up('ds')]: {
    marginLeft: '40px',
  },
  [theme.breakpoints.up('dm')]: {
    fontSize: '14px',
    lineHeight: '16px',
  },
}));

export const StyledList = styled(List)(() => ({
  marginLeft: '40px',
}));

export const StyledAuthor = styled(Link)`
  font-weight: normal;
  font-size: 15px;
  line-height: 16px;
  color: ${theme.palette.primary.main};
  coursor: pointer;
`;
