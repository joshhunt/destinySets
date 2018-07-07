import React from 'react';

import { saveDataExplorerVisited } from 'app/lib/ls';

import styles from './styles.styl';

import DonateButton from 'app/components/DonateButton';

const rememberDev = () => saveDataExplorerVisited(true);

export default function Footer({ item }) {
  return (
    <div className={styles.footer}>
      <DonateButton />
      <br />
      Developer, or curious about the data behind Destiny? Check out the{' '}
      <a
        href="https://data.destinysets.com"
        target="_blank"
        rel="noopener noreferrer"
        onClick={rememberDev}
      >
        Destiny Data Explorer
      </a>
      <br />
      <br />
      Made with love by{' '}
      <a href="http://joshhunt.is" target="_blank" rel="noopener noreferrer">
        Josh Hunt
      </a>{' '}
      for Destiny fans.
      <br />
      Having issues or need help?{' '}
      <a href="https://twitter.com/joshhunt">Contact me on twitter</a> or{' '}
      <a href="https://github.com/joshhunt/destinySets">
        file an issue on Github
      </a>{' '}
      <br />
      Destiny is a registered trademark of Bungie. Data and images sourced from
      Bungie.
      <br />
      Copyright © World Class Development Ltd 2018
    </div>
  );
}
