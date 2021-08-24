import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GLOBAL_PATHS_ROUTES } from './GlobalPaths';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {GLOBAL_PATHS_ROUTES.map((route) => (
          <Route {...route} key={`${route.path}`} />
        ))}
      </Switch>
    </BrowserRouter>
  );
};
