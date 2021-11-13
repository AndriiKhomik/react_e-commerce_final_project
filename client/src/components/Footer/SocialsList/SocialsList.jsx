import React from 'react';
import { socials } from './socialIcons';
import SocialsItem from '../SocialsItem';
import { StyledList } from './Styles';

const SocialsList = () => {
  return (
    <StyledList>
      {socials.map(({ id, ...social }) => {
        return <SocialsItem key={id} social={social} />;
      })}
    </StyledList>
  );
};
export default SocialsList;
