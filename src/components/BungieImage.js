import React from 'react';

export default function BungieImage({ src, ...props }) {
  const url = src.includes('//bungie.net/') ? src : `https://bungie.net/${src}`;
  return <img src={url} {...props} alt="" />;
}
