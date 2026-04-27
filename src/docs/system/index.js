import { lazy } from 'react';
import { docsRegistry } from '@/docs/system/registry';

export const docSystem = {
  id: 'docs',
  path: '/docs',
  component: lazy(() => import('@/docs/system/pages/Documentation')),
  title: 'Documentation',
  description: 'Metadata-driven documentation for shared UI components.',
  items: docsRegistry.map(reg => ({
    id: reg.id,
    title: reg.title,
    path: `/docs/components/${reg.id}`
  }))
};
