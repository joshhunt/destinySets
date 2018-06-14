// @flow

export type ItemHash = number;

export type SetSection = {|
  name: string,
  items?: Array<ItemHash>,
  query?: string,
  season?: number,
  bigItems?: boolean,
  type?: 'exoticCatalysts',
  itemGroups?: Array<Array<ItemHash>>
|};

export type DestinySet = {|
  name: string,
  description?: string,
  image?: string,
  small?: boolean,
  big?: boolean,
  query?: string,
  sections: Array<SetSection>
|};

export type SetPageSection = {|
  name: string,
  sets: Array<DestinySet>
|};

export type SetPage = Array<SetPageSection>;
