import React, { Fragment } from 'react';

import { saveDataExplorerVisited } from 'app/lib/ls';

import styles from './styles.styl';

import DonateButton from 'app/components/DonateButton';

const rememberDev = () => saveDataExplorerVisited(true);

export default function Footer({ item, children }) {
  return (
    <div className={styles.footer}>
      <DonateButton />
      {children && (
        <Fragment>
          <br />
          {children}
          <br />
        </Fragment>
      )}
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
      Made by{' '}
      <a href="http://joshhunt.is" target="_blank" rel="noopener noreferrer">
        Josh Hunt
      </a>{' '} and <a href="https://twitter.com/Jakosaur_" target="_blank" rel="noopener noreferrer">
      Jakosaur_
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
