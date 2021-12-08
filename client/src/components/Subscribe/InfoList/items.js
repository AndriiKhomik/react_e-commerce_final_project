import React from 'react';
// import AudioBookIcon from '../../icons/AudioBookIcon';
// import ElBookIcon from '../../icons/ElBookIcon';
// import PaperBookIcon from '../../icons/PaperBookIcon';

import LaptopChromebookOutlinedIcon from '@mui/icons-material/LaptopChromebookOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';

export const subscribeItems = [
  {
    id: '1',
    component: <LaptopChromebookOutlinedIcon width='75' height='75' />,
    title: 'Paper book',
    text: 'You can buy paper version of each book and enjoy it every moment',
  },
  {
    id: '2',
    component: <LibraryMusicOutlinedIcon width='75' height='75' />,
    title: 'Audio book',
    text: 'Audio book is the best solution while you driving or in transport',
  },
  {
    id: '3',
    component: <MenuBookOutlinedIcon width='75' height='75' />,
    title: 'Electronic book',
    text: 'A lot of books and authors in you pocket device',
  },
];
