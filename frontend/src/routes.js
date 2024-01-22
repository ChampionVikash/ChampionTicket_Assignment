// routes.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      {/* Add more routes as needed */}
    </Switch>
  );
};

export default Routes;
