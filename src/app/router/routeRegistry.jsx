import { useStateFeature } from '@/features/use-state'
import { styleguide } from '@/docs/styleguide'
import { notFoundRoute } from '@/system/notFound'
import ExampleLayout from '@/layouts/exampleLayout/ExampleLayout'

export const learningFeatures = [useStateFeature]

export const docsPages = [styleguide]

export const utilityRoutes = [notFoundRoute]

export function createLearningFeatureRoutes() {
  return learningFeatures.map((feature) => {
    const route = {
      id: feature.id,
      path: feature.path,
      children: [
        {
          index: true,
          Component: feature.component,
          handle: {
            feature,
          },
        },
      ],
    }

    if (feature.examples) {
      const exampleRoutes = feature.examples.map((example) => ({
        path: example.path,
        handle: {
          feature,
          example,
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
}

export function createDocsRoutes() {
  return docsPages.map((docPage) => ({
    id: docPage.id,
    children: [
      {
        path: docPage.path,
        Component: docPage.component,
        handle: {
          docPage,
        },
      },
    ],
  }))
}

export function getUtilityRoute(routeId) {
  return utilityRoutes.find((route) => route.id === routeId)
}
