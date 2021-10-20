import { RouteProps } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Room } from '../pages/Room';
import { Store } from '../pages/Store';

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
  },
  {
    path: '/room/:id',
    exact: true,
    component: Room
  },
  {
    path: '/store',
    exact: true,
    component: Store
  }
];
