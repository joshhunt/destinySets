import React from 'react';

import styles from './styles.styl';

export default function Footer({ item }) {
  return (
    <div className={styles.footer}>
      Made with love by <a href="http://joshhunt.is" target="_blank">Josh Hunt</a> for Destiny fans.<br/>
      Destiny is a registered trademark of Bungie. Data and images sourced from Bungie.
      Loot tables <a href="https://lowlidev.com.au/destiny/" target="_blank">originally from lowlines</a>.
    </div>
  )
}
