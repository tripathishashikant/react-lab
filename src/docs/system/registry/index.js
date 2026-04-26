import { buttonRegistry } from '@/docs/system/registry/button/index';
import { cardRegistry } from '@/docs/system/registry/card/index';

export const docsRegistry = [
  buttonRegistry,
  cardRegistry
];

export function getDocById(id) {
  return docsRegistry.find(doc => doc.id === id);
}
