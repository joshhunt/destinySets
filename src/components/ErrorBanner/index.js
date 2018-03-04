import React from 'react';

import { errorPrompt } from 'app/lib/telemetry';

import styles from './styles.styl';

export default function ErrorBanner({ error, onClose }) {
  return (
    <div className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.title}>An error has occurred</div>
        <p className={styles.para}>
          <strong>
            {error.message || (error.toString && error.toString())}
          </strong>
        </p>
        <p className={styles.para}>
          This error has automatically been reported. If you want,{' '}
          <a href="#" onClick={errorPrompt}>
            click here
          </a>{' '}
          to provide additional details to help us diagnose the issue.
          Additionally, you can get in touch on{' '}
          <a
            href="https://twitter.com/joshhunt"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>, or file an issue on{' '}
          <a
            href="https://github.com/joshhunt/destinySets/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>.
        </p>

        <button className={styles.button} onClick={errorPrompt}>
          Provide more details
        </button>
      </div>

      {onClose && (
        <div>
          <button className={styles.close} onClick={() => onClose()}>
            <i className="fa fa-close" />
          </button>
        </div>
      )}
    </div>
  );
}
