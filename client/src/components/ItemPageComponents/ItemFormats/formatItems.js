import React from 'react';
import AudioBookIcon from '../../icons/AudioBookIcon';
import ElBookIcon from '../../icons/ElBookIcon';
import PaperBookIcon from '../../icons/PaperBookIcon';

export const formatItems = [
  {
    id: '1',
    component: <PaperBookIcon width='35' height='35' />,
    title: 'Paper book',
  },
  {
    id: '2',
    component: <AudioBookIcon width='35' height='35' />,
    title: 'Audio book',
  },
  {
    id: '3',
    component: <ElBookIcon width='35' height='35' />,
    title: 'Electronic book',
  },
];
