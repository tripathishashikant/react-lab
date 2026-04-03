import { docsPages, learningFeatures } from '@/app/router/routeRegistry'

// Sidebar should only include user-facing learning and docs surfaces.
export const sidebarMenu = [...learningFeatures, ...docsPages].map((item) => ({
  ...item,
  type: 'link',
}))
