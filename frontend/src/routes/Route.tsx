import React from 'react';
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDOMRouteProps {
  isAdm?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isAdm = false,
  component: Component,
  ...rest
}) => {
  const { adm } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isAdm === !!adm ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isAdm ? '/' : '/adm/products',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
