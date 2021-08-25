import { RouteProps } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';

export const GLOBAL_PATHS_ROUTES: RouteProps[] = [
  {
    path: '/',
    exact: true,
    component: Login
  },
  {
    path: '/home',
    exact: true,
    component: Home
  }
];
