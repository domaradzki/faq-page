import React, { FunctionComponent, ReactNode } from 'react';

import styles from './faqlist.module.scss';

const Faqlist: FunctionComponent<{
  children: ReactNode;
  categoryName: string;
}> = ({ children, categoryName }) => {
  return (
    <div className={styles.faqlist}>
      <h2 className={styles.faqcategory}>{categoryName}</h2>
      {children}
    </div>
  );
};

export default Faqlist;
