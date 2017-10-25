import React from 'react';

import styles from './styles.styl';

export default function Footer({ item }) {
  return (
    <div className={styles.footer}>
      Made with love by{' '}
      <a href="http://joshhunt.is" target="_blank">
        Josh Hunt
      </a>{' '}
      for Destiny fans. <br />
      Having issues or need help?{' '}
      <a href="https://twitter.com/joshhunt">Contact me on twitter</a> or{' '}
      <a href="https://github.com/joshhunt/destinySets">
        file an issue on Github
      </a>{' '}
      <br />
      Destiny is a registered trademark of Bungie. Data and images sourced from
      Bungie.
    </div>
  );
}
