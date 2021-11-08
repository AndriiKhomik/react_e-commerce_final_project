import React from 'react';
import AudioBookIcon from '../../icons/AudioBookIcon';
import ElBookIcon from '../../icons/ElBookIcon';
import PaperBookIcon from '../../icons/PaperBookIcon';
import SubscribeForm from '../Form/SubscribeForm';

const Subscribe = () => {
  return (
    <>
      <ElBookIcon width='75' height='75' />
      <AudioBookIcon width='75' height='75' />
      <PaperBookIcon width='75' height='75' />
      <SubscribeForm />;
    </>
  );
};

export default Subscribe;
