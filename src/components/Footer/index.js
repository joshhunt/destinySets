import React from 'react';
import { Link } from 'react-router';

import styles from './styles.styl';

import DonateButton from 'app/components/DonateButton';

export default function Footer({ item }) {
  return (
    <div className={styles.footer}>
      <DonateButton />
      <br />
      Developer, or curious about the data behind Destiny? Check out the{' '}
      <Link to="/data">Data Explorer</Link>
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
