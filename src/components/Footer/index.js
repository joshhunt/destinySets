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
      .
      <br />
      <br />
      Made by{' '}
      <a
        href="https://twitter.com/joshhunt"
        target="_blank"
        rel="noopener noreferrer"
      >
        Josh Hunt
      </a>{' '}
      and{' '}
      <a
        href="https://twitter.com/Jakosaur"
        target="_blank"
        rel="noopener noreferrer"
      >
        Jakosaur
      </a>{' '}
      for Destiny fans.
      <br />
      Having issues or need help?{' '}
      <a
        href="https://github.com/joshhunt/destinySets/issues"
        target="_blank"
        rel="noopener noreferrer"
      >
        File an issue on GitHub
      </a>
      .
      <br />
      Many thanks to{' '}
      <a
        href="https://twitter.com/JpDeathBlade"
        target="_blank"
        rel="noopener noreferrer"
      >
        JpDeathBlade
      </a>{' '}
      and{' '}
      <a
        href="https://www.todayindestiny.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        TodayInDestiny
      </a>{' '}
      for the Eververse Bright Dust schedule.
      <br />
      <br />
      Destiny is a registered trademark of Bungie. Data and images sourced from
      Bungie.
      <br />
      Copyright © World Class Development Ltd 2018
    </div>
  );
}
