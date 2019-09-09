import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Tooltip } from 'react-tippy';
import Item from 'app/components/Item';

function ItemWithTooltip({ item, ...props }) {
  const tooltip = item && (
    <Fragment>
      {item.displayProperties.name}
      <br />
      <small>{item.itemTypeAndTierDisplayName} </small>
    </Fragment>
  );

  return (
    <Tooltip html={tooltip} arrow>
      <Item {...props} />
    </Tooltip>
  );
}

function mapStateToProps(state, ownProps) {
  const { itemHash } = ownProps;

  const itemDefs =
    state.definitions && state.definitions.DestinyInventoryItemDefinition;

  const item = itemDefs && itemDefs[itemHash];

  return { item };
}

export default connect(mapStateToProps)(ItemWithTooltip);
