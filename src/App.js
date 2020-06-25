import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import { HashRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path={`/`} exact render={() => <h1> MAIN PAGE </h1>} />
          <Route path={`*`} render={() => <h2> 404 Page Not Found </h2>} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
