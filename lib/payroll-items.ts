import type { ItemFolha } from './types';

export function replacePointOvertime<T extends ItemFolha>(items: T[], item: T | null): T[] {
  const remaining = items.filter(existing => !('lancamentoId' in existing) && (!item || existing.codigoEvento !== '0006'));
  return item ? [...remaining, item] : remaining;
}
