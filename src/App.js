import React from 'react';
import { Route } from 'react-router-dom';
import Categories from './components/Categories';
import ToolsUtf8 from './components/ToolsUtf8';

function App() {
  return (
    <>
      <Route path="/" component={Categories} />
      <Route path="/utf8" component={ToolsUtf8} />
    </>
  );
}

export default App;
