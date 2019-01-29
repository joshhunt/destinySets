import React from 'react';

export default function BungieImage({ src, ...props }) {
  if (!src) {
    return null;
  }
  const url = src.includes('//bungie.net/') ? src : `https://bungie.net/${src}`;
  return <img src={url} {...props} alt="" />;
}
