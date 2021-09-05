import React, { FunctionComponent, useEffect, useState } from 'react';
import Faqview from '../faqview/faqview';

import { getDataPromise } from '../../services/getData';

import styles from './main.module.scss';

const Main: FunctionComponent = () => {
  const [data, setData] = useState();

  useEffect(() => {
    getDataPromise.then((data) => setData(data));
  }, []);
  console.log(data);
  return (
    <main className={styles.main}>
      <Faqview>
        <div>main</div>
      </Faqview>
    </main>
  );
};

export default Main;
