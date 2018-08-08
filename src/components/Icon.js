import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import fontawesome from '@fortawesome/fontawesome';

fontawesome.library.add(
  require('@fortawesome/fontawesome-pro-regular/faTimes'),
  require('@fortawesome/fontawesome-pro-regular/faCheck'),
  require('@fortawesome/fontawesome-pro-regular/faChevronDown'),
  require('@fortawesome/fontawesome-pro-regular/faSpinnerThird'),
  require('@fortawesome/fontawesome-pro-regular/faBars'),
  require('@fortawesome/fontawesome-pro-regular/faExclamationTriangle'),
  require('@fortawesome/fontawesome-pro-regular/faMinus'),
  require('@fortawesome/fontawesome-pro-regular/faMinusSquare'),
  require('@fortawesome/fontawesome-pro-regular/faPlus'),
  require('@fortawesome/fontawesome-pro-regular/faPlusSquare'),

  require('@fortawesome/fontawesome-free-brands/faPaypal'),
  require('@fortawesome/fontawesome-free-brands/faGithub'),
  require('@fortawesome/fontawesome-free-brands/faTwitter'),
  require('@fortawesome/fontawesome-free-brands/faPlaystation'),
  require('@fortawesome/fontawesome-free-brands/faXbox'),
  require('@fortawesome/fontawesome-free-brands/faWindows'),
  require('@fortawesome/fontawesome-free-brands/faGoogleDrive')
);

export default function Icon({ icon, name, brand, light, solid, ...props }) {
  let prefix = 'far';

  if (brand) {
    prefix = 'fab';
  } else if (light) {
    prefix = 'fal';
  } else if (solid) {
    prefix = 'fas';
  }

  return <FontAwesomeIcon icon={[prefix, icon || name]} {...props} />;
}
