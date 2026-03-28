import { features, topicsFeature } from '@/features/index.js'

// This function generates the menu structure for the sidebar.
// It uses the 'features' array as the single source of truth.
export const generateMenu = () => {
  const menuItems = [{ ...topicsFeature, type: 'link' }, ...features.map((feature) => ({ ...feature, type: 'link' }))]

  return menuItems
}
