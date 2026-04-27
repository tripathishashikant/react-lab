import { lazy } from 'react';

export default {
  id: 'form-input',
  path: 'form-input',
  title: 'Form Input',
  description: 'An example of using `useState` to manage the state of a form input field.',
  difficulty: 'medium',
  component: lazy(() => import('@/features/use-state/examples/form-input/FormInput')),
  code: () => import('@/features/use-state/examples/form-input/FormInput.jsx?raw').then(m => m.default),
}
