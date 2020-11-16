import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import DashBoard from '../pages/DashBoard'

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route component={DashBoard} path="/" exact/>
    </Switch>
  </BrowserRouter>
)

export default Routes;