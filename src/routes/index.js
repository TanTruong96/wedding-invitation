import { lazy } from 'react';

const routes = [
  {
    path: '/thuynguyen-nhantruong',
    name: 'Wedding Inviation',
    component: lazy(() => import('../pages/Wedding')),
    exact: false,
  },
  {
    path: '/nhantruong-thuynguyen',
    name: 'Wedding Inviation',
    component: lazy(() => import('../pages/Wedding')),
    exact: true,
  },
];

export default routes;