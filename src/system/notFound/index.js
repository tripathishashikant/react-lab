import { lazy } from 'react';

export const notFoundRoute = {
  id: 'not-found',
  path: '/not-found',
  component: lazy(() => import('@/system/notFound/pages/NotFoundPage')),
  seo: {
    title: '404 - Page Not Found',
    description: 'The page you are looking for does not exist.',
    robots: 'noindex, nofollow',
  },
}
