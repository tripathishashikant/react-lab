import { useStateFeature } from '@/features/use-state'
import { docSystem } from '@/docs/system'
import { notFoundRoute } from '@/system/notFound'
import ExampleLayout from '@/layouts/exampleLayout/ExampleLayout'

export const learningFeatures = [useStateFeature]

export const docsPages = [docSystem]

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
  return docsPages.map((docSystem) => ({
    id: docSystem.id,
    path: docSystem.path,
    children: [
      {
        index: true,
        Component: docSystem.component,
        handle: {
          docPage: docSystem,
        },
      },
      {
        path: 'components/:docId',
        Component: docSystem.component,
        handle: {
          docPage: docSystem,
        },
      },
    ],
  }))
}

export function getUtilityRoute(routeId) {
  return utilityRoutes.find((route) => route.id === routeId)
}
