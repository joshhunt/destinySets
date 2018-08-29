export function makeSimpleAction(type) {
  return () => ({ type });
}

export function makePayloadAction(type) {
  return payload => ({ type, payload });
}

export function toggle(state, field) {
  return {
    ...state,
    [field]: !state[field]
  };
}
