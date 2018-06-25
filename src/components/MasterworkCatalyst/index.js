import React, { Component } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

import Icon from 'app/components/Icon';
import Objectives from 'app/components/Objectives';
import BungieImage from 'app/components/BungieImage';
import ItemBanner from 'app/components/ItemBanner';
import {
  makeCatalystSelector,
  makeItemInstanceSelector,
  itemDefsSelector,
  objectiveDefsSelector,
  NO_DATA,
  NO_CATALYST,
  INACTIVE_CATALYST,
  ACTIVE_CATALYST_INPROGRESS,
  ACTIVE_CATALYST_COMPLETE,
  MASTERWORK_UPGRADED
} from 'app/store/selectors';

import masterworkComplete from './masterwork-hammer.png';
import SocketDebug from './Debug';
import s from './styles.styl';

const DEBUG = false;

const MASTERWORK_STATUS = {
  [NO_DATA]:
    'Missing data - Destiny Sets can only see Catalyst and Masterwork data for Exotics in your inventory.',
  // [NO_CATALYST]: 'No catalyst',
  [INACTIVE_CATALYST]: (
    <span>
      <Icon name="exclamation-triangle" /> The catalyst has dropped, but needs
      to be inserted to activate.
    </span>
  ),
  // [ACTIVE_CATALYST_INPROGRESS]: 'Catalyst in progress, complete objectives',
  [ACTIVE_CATALYST_COMPLETE]: 'Catalyst complete, ready to upgrade.'
  // [MASTERWORK_UPGRADED]: 'Masterwork'
};

const DEBUG_STATUS = {
  [NO_DATA]: 'NO_DATA',
  [NO_CATALYST]: 'NO_CATALYST',
  [INACTIVE_CATALYST]: 'INACTIVE_CATALYST',
  [ACTIVE_CATALYST_INPROGRESS]: 'ACTIVE_CATALYST_INPROGRESS',
  [ACTIVE_CATALYST_COMPLETE]: 'ACTIVE_CATALYST_COMPLETE',
  [MASTERWORK_UPGRADED]: 'MASTERWORK_UPGRADED'
};

class MasterworkCatalyst extends Component {
  render() {
    const { className, item } = this.props;

    if (!item) {
      return <div className={cx(className, s.placeholder)} />;
    }

    const { status, hintText } = this.props.catalystData;
    const statusText = MASTERWORK_STATUS[status];

    return (
      <div className={cx(className, s.root)}>
        <div className={s.inner}>
          <BungieImage className={s.screenshot} src={item.screenshot} />
          <ItemBanner item={item} />

          {DEBUG && <p>{DEBUG_STATUS[status]}</p>}

          {status === MASTERWORK_UPGRADED && (
            <p>
              <img
                className={s.masterworkComplete}
                src={masterworkComplete}
                alt=""
              />{' '}
              <span>Masterwork Complete</span>
            </p>
          )}

          {statusText && <p>{statusText}</p>}

          {hintText && (
            <p>
              <em>{hintText}</em>
            </p>
          )}

          {this.props.catalystData.objectives && (
            <Objectives
              className={s.objectives}
              objectives={this.props.catalystData.objectives}
              objectiveDefs={this.props.objectiveDefs}
            />
          )}

          {DEBUG && (
            <SocketDebug
              instances={this.props.instances}
              itemDefs={this.props.itemDefs}
              objectiveDefs={this.props.objectiveDefs}
            />
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps() {
  const catalystSelector = makeCatalystSelector();
  const itemInstanceSelector = makeItemInstanceSelector();
  return (state, ownProps) => {
    return {
      instances: itemInstanceSelector(state, ownProps),
      catalystData: catalystSelector(state, ownProps),
      itemDefs: itemDefsSelector(state),
      objectiveDefs: objectiveDefsSelector(state)
    };
  };
}

export default connect(mapStateToProps)(MasterworkCatalyst);
