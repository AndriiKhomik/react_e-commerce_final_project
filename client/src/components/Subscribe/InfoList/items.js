import React from 'react';
import AudioBookIcon from '../../icons/AudioBookIcon';
import ElBookIcon from '../../icons/ElBookIcon';
import PaperBookIcon from '../../icons/PaperBookIcon';

export const subscribeItems = [
  {
    id: '1',
    component: <PaperBookIcon width='75' height='75' />,
    title: 'Paper book',
    text: 'You can buy paper version of each book and enjoy it every moment',
  },
  {
    id: '2',
    component: <AudioBookIcon width='75' height='75' />,
    title: 'Audio book',
    text: 'Audio book is the best solution while you driving or in transport',
  },
  {
    id: '3',
    component: <ElBookIcon width='75' height='75' />,
    title: 'Electronic book',
    text: 'A lot of books and authors in you pocket device',
  },
];
