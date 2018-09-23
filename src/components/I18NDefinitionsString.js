// import React from 'react';
import { get } from 'lodash';
import { connect } from 'react-redux';

import { getI18nString, saveI18nString } from 'app/lib/ls';

function I18NDefinitionsString({ msg }) {
  return msg || 'nothing';
}

const JUNK_PREFIXES = ['Source: ', '入手方法: '];
const JUNK_REGEX = new RegExp(`^(${JUNK_PREFIXES.join('|')})`);

const cleanup = msg => {
  return msg.replace(JUNK_REGEX, '');
};

const mapStateToProps = (state, props) => {
  if (!props.t) {
    return { msg: 'empty' };
  }

  if (!props.t.path) {
    return { msg: props.t.fallback || props.t };
  }

  const found = get(state.definitions, props.t.path);

  if (!found) {
    const fallback = getI18nString(props.t.path) || props.t.fallback;
    return { msg: cleanup(fallback) };
  } else {
    saveI18nString(props.t.path, found);
    return { msg: cleanup(found) };
  }
};

export default connect(mapStateToProps)(I18NDefinitionsString);
