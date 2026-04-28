import { createBrowserRouter, redirect } from 'react-router-dom'

import MainLayout from '@/layouts/mainLayout/MainLayout'
import FeatureLayout from '@/layouts/featureLayout/FeatureLayout'
import DocsLayout from '@/layouts/docsLayout/DocsLayout'

import {
  createDocsRoutes,
  createLearningFeatureRoutes,
  getUtilityRoute,
} from '@/app/router/routeRegistry'

const learningFeatureRoutes = createLearningFeatureRoutes()
const docsRoutes = createDocsRoutes()
const fallbackRoute = getUtilityRoute('not-found')

export const routes = [
  {
    path: '/',
    Component: MainLayout,
    handle: {
      seo: {
        title: 'Home',
        description: 'React Lab - A comprehensive playground to learn and experiment with React concepts, hooks, and patterns.',
      },
    },
    children: [
      {
        index: true,
        loader: () => redirect('/use-state'),
      },
      {
        path: '',
        Component: FeatureLayout,
        children: learningFeatureRoutes,
      },
      {
        path: '',
        Component: DocsLayout,
        children: docsRoutes,
      },
      {
        path: '*',
        Component: fallbackRoute.component,
        handle: {
          seo: fallbackRoute.seo,
        },
      },
    ],
  },
]

const router = createBrowserRouter(routes)

export default router
