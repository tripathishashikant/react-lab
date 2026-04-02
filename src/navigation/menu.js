import { docsPages, learningFeatures } from '@/features'

// Sidebar should only include user-facing learning and docs surfaces.
export const sidebarMenu = [...learningFeatures, ...docsPages].map((item) => ({
  ...item,
  type: 'link',
}))
