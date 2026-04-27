import { lazy } from 'react';

export const notFoundRoute = {
  id: 'not-found',
  path: '/not-found',
  component: lazy(() => import('@/system/notFound/pages/NotFoundPage')),
}
