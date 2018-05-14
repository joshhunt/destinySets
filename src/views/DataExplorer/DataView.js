import React, { Component } from 'react';
import JSONTree from 'react-json-tree';
import cx from 'classnames';
import { isString } from 'lodash';

import Vendor from './Vendor';

import s from './dataViewStyles.styl';

const CUSTOM_VIEWS = {
  vendor: Vendor
};

function toTitleCase(str) {
  return str.charAt(0).toUpperCase() + str.substr(1);
}

function getNameForItem(item) {
  let foundName;

  if (item.displayProperties && item.displayProperties.name) {
    foundName = item.displayProperties.name;
  } else if (item.progressDescription) {
    foundName = item.progressDescription;
  }

  return foundName ? `"${foundName}"` : '';
}

export default class DataView extends Component {
  valueRenderer = (prettyValue, rawValue, ...itemPath) => {
    const [fieldName, parentFieldName] = itemPath;

    if (isString(rawValue) && rawValue.match(/\.(png|jpg|jpeg)$/)) {
      const imageUrl = `https://bungie.net${rawValue}`;

      return (
        <span>
          <a href={imageUrl} target="_blank">
            <img className={s.jsonImage} src={imageUrl} alt="preview" />
          </a>
        </span>
      );
    }

    // TODO: should we really be falling back like this?
    const defsForHash =
      this.props.data[fieldName] || this.props.data[parentFieldName];

    if (!defsForHash) {
      return prettyValue;
    }

    const item = defsForHash.defs[rawValue] || {};

    if (!item) {
      return (
        <span className={s.jsonNonLinkedValue}>{`<${
          defsForHash.name
        } ${prettyValue}>`}</span>
      );
    }

    const displayName = getNameForItem(item);

    return (
      <span
        onClick={this.onItemClick.bind(this, item)}
        className={s.jsonLinkedValue}
      >{`<${toTitleCase(
        defsForHash.name
      )} ${displayName} ${prettyValue}>`}</span>
    );
  };

  onItemClick = (item, ev) => {
    ev && ev.preventDefault();
    this.props.onItemClick(item);
  };

  render() {
    const { className, item } = this.props;
    const CustomView = CUSTOM_VIEWS[item.$type];

    return (
      <div className={cx(className, s.root)} ref={r => (this.ref = r)}>
        <h2 className={s.itemTitle}>
          {item.displayProperties && item.displayProperties.name ? (
            item.displayProperties.name
          ) : (
            <em>No name</em>
          )}&nbsp;
          <span className={s.hash}>{item.hash}</span>
        </h2>

        {item.displayProperties &&
          item.displayProperties.description && (
            <p className={s.itemDescription}>
              {item.displayProperties.description}
            </p>
          )}

        {CustomView && (
          <CustomView
            data={item}
            defs={this.props.data}
            onItemClick={this.onItemClick}
          />
        )}

        <JSONTree data={item} valueRenderer={this.valueRenderer} />
      </div>
    );
  }
}
