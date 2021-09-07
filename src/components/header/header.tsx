import React, { FunctionComponent } from 'react';
import SearchBar from '../searchbar/searchbar';
import styles from './header.module.scss';

const Header: FunctionComponent<{ query: string; setQuery: Function }> = ({
  query,
  setQuery,
}) => {
  return (
    <header className={styles.header}>
      <SearchBar query={query} setQuery={setQuery} />
    </header>
  );
};

export default Header;
