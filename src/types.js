// @flow

export type I18nDefinitionString = {|
  path: string,
  fallback: string
|};

export type ItemHash = number;

export type ItemsList = Array<ItemHash>;

export type ItemType = 'exoticCatalysts';

export type SetSection = {|
  name: string,
  items?: ItemsList,
  query?: string,
  season?: number,
  bigItems?: boolean,
  itemType?: ItemType,
  itemGroups?: Array<ItemsList>
|};

export type DestinySet = {|
  name: string | I18nDefinitionString,
  id: string,
  description?: string | I18nDefinitionString,
  image?: string,
  small?: boolean,
  big?: boolean,
  noUi?: boolean,
  query?: string,
  sections: Array<SetSection>
|};

export type SetPageSection = {|
  name: string,
  noUi?: boolean,
  sets: Array<DestinySet>
|};

export type SetPage = Array<SetPageSection>;
