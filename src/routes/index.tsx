import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Follow from '../pages/Follow';
import Message from '../pages/Message';
import Report from '../pages/Report';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/report" exact component={Report} />
    <Route path="/message" exact component={Message} />
    <Route path="/follow" exact component={Follow} />
  </Switch>
);

export default Routes;
