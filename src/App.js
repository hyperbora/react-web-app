import React from 'react';
import { Route } from 'react-router-dom';
import Categories from './components/Categories';
import ToolsUtf8 from './components/ToolsUtf8';
import Constants from './constants'

function App() {
  return (
    <>
      <Route path={`${Constants.base}/`} component={Categories} />
      <Route path={`${Constants.base}/utf8`} component={ToolsUtf8} />
    </>
  );
}

export default App;
