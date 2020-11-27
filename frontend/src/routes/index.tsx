import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import DashBoard from '../pages/DashBoard'
import Login from '../pages/Login'
import Register from '../pages/Cadastro'
import Bag from '../pages/Bag'
import RegistrationAddress from '../pages/CadastroEnd'
import Price from '../pages/Preco'
import ProductDetails from '../pages/ProdutoDetalhes'


const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route component={DashBoard} path="/" exact/>
      <Route component={Login} path="/login" />
      <Route component={Register} path="/register" />
      <Route component={Bag} path="/bag" />
      <Route component={RegistrationAddress} path="/register-address" />
      <Route component={Price} path="/price" />
      <Route component={ProductDetails} path="/product-details" />
    </Switch>
  </BrowserRouter>
)

export default Routes;