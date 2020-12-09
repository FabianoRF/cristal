import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DashBoard from '../pages/DashBoard';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Bag from '../pages/Bag';
import RegistrationAddress from '../pages/RegistrationAddress';
import Price from '../pages/Price';
import ProductDetails from '../pages/ProductDetails';

const Routes: React.FC = () => (
  <Switch>
    <Route component={DashBoard} path="/" exact />
    <Route component={ProductDetails} path="/product-details/:id" />

    <Route component={Login} path="/login" />
    <Route component={Register} path="/register" />
    <Route component={Bag} path="/bag" />
    <Route component={RegistrationAddress} path="/register-address" />
    <Route component={Price} path="/price" />
  </Switch>
);

export default Routes;
