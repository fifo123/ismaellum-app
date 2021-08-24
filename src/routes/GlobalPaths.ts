import { RouteProps } from 'react-router-dom';
import { Login } from '../pages/Login';

export const GLOBAL_PATHS_ROUTES: RouteProps[] = [
  {
    path: '/',
    exact: true,
    component: Login
  }
];
