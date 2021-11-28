import React from 'react';
import AudioBookIcon from '../../../components/icons/AudioBookIcon';
import ElBookIcon from '../../../components/icons/ElBookIcon';
import PaperBookIcon from '../../../components/icons/PaperBookIcon';

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
