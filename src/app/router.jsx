import { createBrowserRouter, redirect } from 'react-router-dom'

import MainLayout from '@/layouts/mainLayout/MainLayout'
import FeatureLayout from '@/layouts/featureLayout/FeatureLayout'
import ExampleLayout from '@/layouts/exampleLayout/ExampleLayout'

import { docsPages, learningFeatures, utilityRoutes } from '@/features'

const learningFeatureRoutes = learningFeatures.map(f => {
  const route = {
    id: f.id,
    path: f.path,
    // This is now a layout route, so it has no component.
    // The component is on the index route below.
    children: [
      {
        index: true,
        Component: f.component,
        handle: {
          feature: f,
        },
      },
    ],
  }

  if (f.examples) {
    const exampleRoutes = f.examples.map(example => ({
      path: example.path,
      handle: {
        feature: f,
        example: example,
      },
      element: (
        <ExampleLayout
          exampleComponent={<example.component />}
          code={example.code}
          notes={example.notes}
        />
      ),
    }))
    route.children.push(...exampleRoutes)
  }

  return route
})

const docsRoutes = docsPages.map((page) => ({
  id: page.id,
  path: page.path,
  children: [
    {
      index: true,
      Component: page.component,
      handle: {
        docPage: page,
      },
    },
  ],
}))

const fallbackRoute = utilityRoutes.find((route) => route.id === 'not-found')

export const routes = [
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => redirect('/use-state'),
      },
      {
        path: '',
        Component: FeatureLayout,
        children: [...learningFeatureRoutes, ...docsRoutes],
      },
      {
        path: '*',
        Component: fallbackRoute.component,
      },
    ],
  },
]

const router = createBrowserRouter(routes)

export default router
