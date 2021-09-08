import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Message from '../pages/Message';
import Report from '../pages/Report';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/report" exact component={Report} />
    <Route path="/message" exact component={Message} />
  </Switch>
);

export default Routes;
