import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Index from './index';

export default function RouterPage() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index} />
      </Switch>
    </Router>
  );
}
