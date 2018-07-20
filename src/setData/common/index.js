// @flow
import type { ItemsList, SetSection } from '../../types';

export * from './ironBanner';
export * from './eververse';
export * from './trials';
export * from './factions';
export * from './yearOneRaids';
export * from './vendors';

export const section = (name: string, items: ItemsList): SetSection => ({
  name,
  items
});
