import React, { useState } from 'react';
import Header from '../header/header';
import Main from '../main/main';

function App() {
  const [query, setQuery] = useState<string>('');
  return (
    <div>
      <Header query={query} setQuery={setQuery} />
      <Main query={query} />
    </div>
  );
}

export default App;
