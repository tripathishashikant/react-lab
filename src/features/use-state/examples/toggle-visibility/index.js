import { lazy } from 'react';

export default {
  id: 'toggle-visibility',
  path: 'toggle-visibility',
  title: 'Toggle Visibility',
  description: 'A component that toggles the visibility of an element using `useState`.',
  difficulty: 'difficult',
  component: lazy(() => import('@/features/use-state/examples/toggle-visibility/ToggleVisibility')),
  code: () => import('@/features/use-state/examples/toggle-visibility/ToggleVisibility.jsx?raw').then(m => m.default),
}
