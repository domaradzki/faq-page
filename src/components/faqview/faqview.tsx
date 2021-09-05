import React, { FunctionComponent, ReactNode } from 'react';
import styles from './faqview.module.scss';

const Faqview: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return <div className={styles.faqview}>{children}</div>;
};

export default Faqview;
