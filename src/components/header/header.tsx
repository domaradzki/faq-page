import React, { FunctionComponent } from 'react';
import SearchBar from '../searchbar/searchbar';
import styles from './header.module.scss';

const Header: FunctionComponent<{ query: string; setQuery: Function }> = ({
  query,
  setQuery,
}) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>How can we help You ?</h1>
      <SearchBar query={query} setQuery={setQuery} />
    </header>
  );
};

export default Header;
