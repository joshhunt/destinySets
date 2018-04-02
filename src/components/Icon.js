import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import fontawesome from '@fortawesome/fontawesome';
import faRegular from '@fortawesome/fontawesome-pro-regular';

fontawesome.library.add(faRegular);

export default function Icon({ icon }) {
  return <FontAwesomeIcon icon={['far', icon]} />;
}
