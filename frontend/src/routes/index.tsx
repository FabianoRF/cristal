import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import DashBoard from '../pages/DashBoard'
import Login from '../pages/Login'


const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route component={DashBoard} path="/" exact/>
      <Route component={Login} path="/login" />
    </Switch>
  </BrowserRouter>
)

export default Routes;