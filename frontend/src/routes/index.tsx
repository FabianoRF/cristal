import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import DashBoard from '../pages/DashBoard';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Bag from '../pages/Bag';
import RegistrationAddress from '../pages/RegistrationAddress';
import Price from '../pages/Price';
import ProductDetails from '../pages/ProductDetails';

import TableProducts from '../pages/adm/TableProducts';
import RegisterProduct from '../pages/adm/RegisterProduct';
import EditProduct from '../pages/adm/EditProduct';

const Routes: React.FC = () => (
  <Switch>
    <Route component={DashBoard} path="/" exact />
    <Route component={ProductDetails} path="/product-details/:id" />

    <Route component={Login} path="/login" />
    <Route component={Register} path="/register/:email" />
    <Route component={Bag} path="/bag" />
    <Route component={RegistrationAddress} path="/register-address" />
    <Route component={Price} path="/price" />

    <Route component={TableProducts} path="/adm/products" isAdm />
    <Route component={RegisterProduct} path="/adm/register-product" isAdm />
    <Route component={EditProduct} path="/adm/edit-product/:id" isAdm />
  </Switch>
);

export default Routes;
