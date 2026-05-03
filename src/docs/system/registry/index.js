import { buttonRegistry } from '@/docs/system/registry/button/index';
import { cardRegistry } from '@/docs/system/registry/card/index';
import { alertRegistry } from '@/docs/system/registry/alert/index';
import { badgeRegistry } from '@/docs/system/registry/badge/index';
import { tabsRegistry } from '@/docs/system/registry/tabs/index';
import { inputRegistry } from '@/docs/system/registry/input/index';
import { loaderRegistry } from '@/docs/system/registry/loader/index';
import { codeRegistry } from '@/docs/system/registry/code/index';
import { tableRegistry } from '@/docs/system/registry/table/index';
import { modalRegistry } from '@/docs/system/registry/modal/index';
import { logoRegistry } from '@/docs/system/registry/logo/index';
import { themeSwitcherRegistry } from '@/docs/system/registry/theme-switcher/index';

export const docsRegistry = [
  buttonRegistry,
  cardRegistry,
  alertRegistry,
  badgeRegistry,
  tabsRegistry,
  inputRegistry,
  loaderRegistry,
  codeRegistry,
  tableRegistry,
  modalRegistry,
  logoRegistry,
  themeSwitcherRegistry
];

export function getDocById(id) {
  return docsRegistry.find(doc => doc.id === id);
}
