import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import ToolsUtf8 from './components/ToolsUtf8';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path={`/`} exact render={() => <h1>MAIN PAGE</h1>} />
        <Route path={`/utf8`} component={ToolsUtf8} />
        <Route path={`*`} render={() => <h2>404 Page Not Found</h2>} />
      </Switch>
    </Layout>
  );
}

export default App;
