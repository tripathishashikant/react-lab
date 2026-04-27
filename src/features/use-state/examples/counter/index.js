import { lazy } from 'react';

export default {
  id: 'counter',
  path: 'counter',
  title: 'Counter',
  description: 'A simple counter example to demonstrate the basic usage of `useState`.',
  difficulty: 'easy',
  component: lazy(() => import('@/features/use-state/examples/counter/Counter')),
  code: () => import('@/features/use-state/examples/counter/Counter.jsx?raw').then(m => m.default),
}
