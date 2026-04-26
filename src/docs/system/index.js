import Documentation from '@/docs/system/pages/Documentation';
import { docsRegistry } from '@/docs/system/registry';

export const docSystem = {
  id: 'docs',
  path: '/docs',
  component: Documentation,
  title: 'Documentation',
  description: 'Metadata-driven documentation for shared UI components.',
  items: docsRegistry.map(reg => ({
    id: reg.id,
    title: reg.title,
    path: `/docs/components/${reg.id}`
  }))
};
