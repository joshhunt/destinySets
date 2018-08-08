import React, { Component } from 'react';

import { saveDataExplorerVisited } from 'app/lib/ls';

export default class DataExplorerRedirect extends Component {
  componentDidMount() {
    saveDataExplorerVisited(true);

    let url = 'https://data.destinysets.com';

    if (this.props.params.itemHash) {
      url = `${url}/i/InventoryItem:${this.props.params.itemHash}`;
    }

    window.location.href = url;
  }

  render() {
    return <h1>Redirecting to data.destinysets.com...</h1>;
  }
}
