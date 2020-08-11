import React from 'react';
import cx from 'classnames';

const MembershipType = {
  Xbox: 1,
  Playstation: 2,
  Steam: 3,
  BattleNet: 4,
  Stadia: 5
};

const Icon = ({
  name,
  icon,
  solid,
  regular,
  light,
  duotone,
  brand,
  className,
  ...rest
}) => {
  const prefix =
    {
      [solid ? 'true' : 'false']: 'fas',
      [regular ? 'true' : 'false']: 'far',
      [light ? 'true' : 'false']: 'fal',
      [duotone ? 'true' : 'false']: 'fad',
      [brand ? 'true' : 'false']: 'fab'
    }['true'] || 'far';

  if (icon) {
    throw new Error('Icon prop specificed on Icon component!', {
      name,
      icon,
      solid,
      regular,
      light,
      duotone,
      brand
    });
  }

  return (
    <span
      data-icon
      {...rest}
      className={cx(className, prefix, `fa-${name}`)}
    ></span>
  );
};

export default Icon;

export const PlatformIcon = ({ type, ...rest }) => {
  const iconMap = {
    [MembershipType.Xbox]: 'xbox',
    [MembershipType.Playstation]: 'playstation',
    [MembershipType.Steam]: 'steam',
    [MembershipType.BattleNet]: 'battle-net',
    [MembershipType.Stadia]: 'google'
  };

  return (
    <Icon
      brand
      name={iconMap[type.toString ? type.toString() : type]}
      {...rest}
    />
  );
};
