import React, { FunctionComponent, useState } from 'react';
import classNames from 'classnames';
import styles from './faqbox.module.scss';

const Faqbox: FunctionComponent<{ title: string; content: string }> = ({
  title,
  content,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleOpenDrawer = () => {
    setIsOpen(!isOpen);
  };
  const classesBox = classNames(
    { [styles.faqbox]: true },
    { [styles.active]: isOpen }
  );
  const classesContent = classNames(
    { [styles.faqcontent]: true },
    { [styles.show]: isOpen }
  );
  return (
    <div className={classesBox} onClick={toggleOpenDrawer}>
      <p className={styles.faqtitle}>{title}</p>
      <p
        className={classesContent}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export default Faqbox;
