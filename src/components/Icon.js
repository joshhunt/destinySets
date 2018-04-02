import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import fontawesome from '@fortawesome/fontawesome';

fontawesome.library.add(
  require('@fortawesome/fontawesome-pro-regular/faCheck')
);

export default function Icon({ icon }) {
  return <FontAwesomeIcon icon={['far', icon]} />;
}
