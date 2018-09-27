import React from 'react';
import { authUrl } from 'app/lib/destinyAuth';
import CTA from '../CTA';

export default function LoginCTA({ children, ...props }) {
  return (
    <CTA {...props} href={authUrl()}>
      {children || 'Connect Bungie.net'}
    </CTA>
  );
}
