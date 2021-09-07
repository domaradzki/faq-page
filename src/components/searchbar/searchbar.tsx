import React, { FunctionComponent } from 'react';
import { Formik, Form, Field } from 'formik';

import styles from './searchbar.module.scss';

const SearchBar: FunctionComponent<{ query: string; setQuery: Function }> = ({
  query,
  setQuery,
}) => {
  interface Values {
    query: string;
  }
  const handleChange = (event: any): void => {
    setQuery(event.currentTarget.value);
  };
  return (
    <div className={styles.searchbar}>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={function (values: Values): void | Promise<any> {
          throw new Error('Function not implemented.');
        }}
      >
        {(props) => (
          <Form>
            <Field
              className={styles.searchinput}
              name="query"
              value={query}
              onChange={handleChange}
              onBlur={props.handleBlur}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SearchBar;
