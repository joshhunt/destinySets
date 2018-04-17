import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import fontawesome from '@fortawesome/fontawesome';

fontawesome.library.add(
  require('@fortawesome/fontawesome-pro-regular/faCheck'),
  require('@fortawesome/fontawesome-pro-regular/faChevronDown'),
  require('@fortawesome/fontawesome-pro-regular/faSpinnerThird'),
  require('@fortawesome/fontawesome-free-brands/faPaypal'),
  require('@fortawesome/fontawesome-free-brands/faGithub'),
  require('@fortawesome/fontawesome-free-brands/faTwitter'),
  require('@fortawesome/fontawesome-free-brands/faPlaystation'),
  require('@fortawesome/fontawesome-free-brands/faXbox'),
  require('@fortawesome/fontawesome-free-brands/faWindows')
);

export default function Icon({ icon, brand, spin }) {
  let prefix = 'far';
  if (brand) {
    prefix = 'fab';
  }
  return <FontAwesomeIcon icon={[prefix, icon]} spin={spin} />;
}
