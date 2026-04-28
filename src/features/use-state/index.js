import UseStatePage from '@/features/use-state/pages/UseStatePage'
import { useStateExamples } from '@/features/use-state/examples/index'

export const useStateFeature = {
  id: 'use-state',
  path: '/use-state',
  component: UseStatePage,
  title: 'useState',
  description: 'The `useState` hook is a function that lets you add React state to function components.',
  difficulty: 'easy',
  category: 'hook',
  examples: useStateExamples,
}
