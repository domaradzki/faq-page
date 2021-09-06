import React, { FunctionComponent } from 'react';
import styles from './faqbox.module.scss';

const Faqbox: FunctionComponent<{ title: string }> = ({ title }) => {
  return (
    <div className={styles.faqbox}>
      <p className={styles.faqtitle}>{title}</p>
    </div>
  );
};

export default Faqbox;
