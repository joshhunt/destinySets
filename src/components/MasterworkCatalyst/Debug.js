import React from 'react';
import { Link } from 'react-router';

import BungieImage from 'app/components/BungieImage';

import s from './styles.styl';

const ItemLink = ({ item, children }) => (
  <Link className={s.itemLink} href={`/data/${item.hash}`}>
    {children}
  </Link>
);

const Bool = ({ bool, children }) => (
  <span className={bool ? s.green : s.red}>{children}</span>
);

const EmptyLi = () => (
  <li>
    <small>
      <em>empty</em>
    </small>
  </li>
);

function ReusablePlug({ plug, itemDefs, objectiveDefs }) {
  const reusablePlugItem = itemDefs[plug.plugItemHash];

  if (!reusablePlugItem) {
    return <EmptyLi />;
  }

  return (
    <li>
      <small>
        <BungieImage
          className={s.plugIcon}
          src={reusablePlugItem.displayProperties.icon}
        />
        <ItemLink item={reusablePlugItem}>
          {reusablePlugItem.displayProperties.name}
        </ItemLink>{' '}
        <small>
          <Bool bool={plug.canInsert}>
            {plug.canInsert ? 'canInsert' : 'cantInsert'}
          </Bool>,{' '}
          <Bool bool={plug.enabled}>
            {plug.enabled ? 'enabled' : 'disabled'}
          </Bool>
        </small>
        {plug.plugObjectives && (
          <ul>
            {plug.plugObjectives.map((objective, index3) => {
              const objectiveDef = objectiveDefs[objective.objectiveHash];
              return (
                <li key={index3}>
                  {objectiveDef.progressDescription} {objective.progress || 0} /{' '}
                  {objectiveDef.completionValue}
                </li>
              );
            })}
          </ul>
        )}
      </small>
    </li>
  );
}

function Socket({ socket, itemDefs, objectiveDefs }) {
  const plugItem = itemDefs[socket.plugHash];

  if (!plugItem) {
    return <EmptyLi />;
  }

  return (
    <li>
      <div>
        <BungieImage
          className={s.plugIcon}
          src={plugItem.displayProperties.icon}
        />

        <ItemLink item={plugItem}>{plugItem.displayProperties.name}</ItemLink>
      </div>

      {socket.reusablePlugs && (
        <ul>
          {socket.reusablePlugs.map((plug, index) => (
            <ReusablePlug
              key={index}
              plug={plug}
              itemDefs={itemDefs}
              objectiveDefs={objectiveDefs}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function SocketDebug({ instances, itemDefs, objectiveDefs }) {
  return (
    <div>
      {instances &&
        instances.map(instance => {
          return (
            <div s={s.instance} key={instance.itemInstanceId}>
              <ul>
                {instance.$sockets.map((socket, index) => (
                  <Socket
                    key={index}
                    socket={socket}
                    itemDefs={itemDefs}
                    objectiveDefs={objectiveDefs}
                  />
                ))}
              </ul>
            </div>
          );
        })}
    </div>
  );
}
