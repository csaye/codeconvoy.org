import CodeIcon from '@material-ui/icons/Code';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

import { outLink } from '../util/outLink.js';

import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <h1>About</h1>
      <hr />
      <div className={styles.content}>
        <p className={styles.motto}>
          <i><b>CodeConvoy aims to make coding easier.</b></i>
        </p>
        <p>We believe that coding is an invaluable life skill that should be
        {' '}<b>accessible to everyone.</b> That&apos;s why we are committed to
        making helpful and educational developer tools that are <b>100% free and
        open source, forever.</b></p>
        <MoneyOffIcon fontSize="large" />
        <LockOpenIcon fontSize="large" />
        <CodeIcon fontSize="large" />
        <p>Want to contribute? Check out our{' '}
          <a href="https://github.com/codeconvoy" {...outLink}>GitHub</a>.
        </p>
      </div>
    </div>
  );
}
