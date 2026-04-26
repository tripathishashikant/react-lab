import { docsPages, learningFeatures } from '@/app/router/routeRegistry'

export const sidebarMenu = [...learningFeatures, ...docsPages].map((item) => ({
  ...item,
  type: 'link',
}))
