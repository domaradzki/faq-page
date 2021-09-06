import React, { FunctionComponent, ReactNode } from 'react';

import styles from './faqcolumn.module.scss';

const Faqcolumn: FunctionComponent<{
  children: ReactNode;
}> = ({ children }) => {
  return <div className={styles.faqcolumn}>{children}</div>;
};

export default Faqcolumn;
