import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import cx from 'classnames';

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

import s from './styles.styl';

const ItemLink = ({ item, children }) => (
  <Link className={s.itemLink} href={`/data/${item.hash}`}>
    {children}
  </Link>
);

const Bool = ({ bool, children }) => (
  <span className={bool ? s.green : s.red}>{children}</span>
);

const MASTERWORK_STATUS = {
  [NO_DATA]: 'No data',
  [NO_CATALYST]: 'No catalyst',
  [INACTIVE_CATALYST]: 'Catalyst needs inserting',
  [ACTIVE_CATALYST_INPROGRESS]: 'Catalyst in progress',
  [ACTIVE_CATALYST_COMPLETE]: 'Catalyst complete',
  [MASTERWORK_UPGRADED]: 'Masterwork'
};

class MasterworkCatalyst extends Component {
  render() {
    const { className, item } = this.props;

    if (!item) {
      return <div className={cx(className, s.placeholder)} />;
    }

    return (
      <div className={cx(className, s.root)}>
        <BungieImage className={s.screenshot} src={item.screenshot} />
        <ItemBanner item={item} />

        <p>status: {MASTERWORK_STATUS[this.props.catalystData.status]}</p>

        {this.props.catalystData.objectives && (
          <Objectives
            objectives={this.props.catalystData.objectives}
            objectiveDefs={this.props.objectiveDefs}
          />
        )}

        {this.props.instances &&
          this.props.instances.map(instance => {
            return (
              <div s={s.instance} key={instance.itemInstanceId}>
                <ul>
                  {instance.$sockets &&
                    instance.$sockets.slice(-1).map((socket, index) => {
                      const plugItem = this.props.itemDefs[socket.plugHash];

                      if (!plugItem) {
                        return (
                          <li key={index}>
                            <small>
                              <em>empty</em>
                            </small>
                          </li>
                        );
                      }

                      return (
                        <li key={index}>
                          <div>
                            <BungieImage
                              className={s.plugIcon}
                              src={plugItem.displayProperties.icon}
                            />
                            <ItemLink item={plugItem}>
                              {plugItem.displayProperties.name}
                            </ItemLink>
                          </div>

                          {socket.reusablePlugs && (
                            <ul>
                              {socket.reusablePlugs.map((plug, index2) => {
                                const reusablePlugItem = this.props.itemDefs[
                                  plug.plugItemHash
                                ];

                                if (!reusablePlugItem) {
                                  return (
                                    <li key={index2}>
                                      <small>
                                        <em>empty</em>
                                      </small>
                                    </li>
                                  );
                                }

                                return (
                                  <li key={index2}>
                                    <small>
                                      <BungieImage
                                        className={s.plugIcon}
                                        src={
                                          reusablePlugItem.displayProperties
                                            .icon
                                        }
                                      />
                                      <ItemLink item={reusablePlugItem}>
                                        {
                                          reusablePlugItem.displayProperties
                                            .name
                                        }
                                      </ItemLink>{' '}
                                      <small>
                                        <Bool bool={plug.canInsert}>
                                          {plug.canInsert
                                            ? 'canInsert'
                                            : 'cantInsert'}
                                        </Bool>,{' '}
                                        <Bool bool={plug.enabled}>
                                          {plug.enabled
                                            ? 'enabled'
                                            : 'disabled'}
                                        </Bool>
                                      </small>
                                      {plug.plugObjectives && (
                                        <ul>
                                          {plug.plugObjectives.map(
                                            (objective, index3) => {
                                              const objectiveDef = this.props
                                                .objectiveDefs[
                                                objective.objectiveHash
                                              ];
                                              return (
                                                <li key={index3}>
                                                  {
                                                    objectiveDef.progressDescription
                                                  }{' '}
                                                  {objective.progress || 0} /{' '}
                                                  {objectiveDef.completionValue}
                                                </li>
                                              );
                                            }
                                          )}
                                        </ul>
                                      )}
                                    </small>
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                </ul>
              </div>
            );
          })}
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
