import React from 'react';
import { socials } from './socials';
import SocialsItem from '../SocialsItem';
import './SocialsList.scss';

const SocialsList = () => {
  return (
    <ul className='footer__socials-list'>
      {socials.map(({ id, ...social }) => {
        return (
          <>
            <SocialsItem key={id} social={social} />
            {/* <li key={id} className="footer__socials-item">
              <a
                rel='”nofollow”'
                title={`move to ${social.name} page`}
                target='blank'
                href={social.link}
                aria-label={`move to ${social.name} page`}
              >
                {social.component}
              </a>
            </li> */}
          </>
        );
      })}
    </ul>
  );
};
export default SocialsList;
