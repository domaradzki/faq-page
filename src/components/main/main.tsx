import React, { FunctionComponent } from 'react';
import Faqview from '../faqview/faqview';

import styles from './main.module.scss';

const Main: FunctionComponent = () => {
  return (
    <main className={styles.main}>
      <Faqview>
        <div>main</div>
      </Faqview>
    </main>
  );
};

export default Main;
