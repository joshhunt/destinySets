const INITIAL_STORE = {
  items: [],
  modalOpen: false
};

const SET_XUR_DATA = 'Xur - set data';
const SET_XUR_MODAL = 'Xur - set modal';

export default function xurReducer(state = INITIAL_STORE, { type, payload }) {
  switch (type) {
    case SET_XUR_DATA:
      return {
        ...state,
        ...payload
      };

    case SET_XUR_MODAL:
      return {
        ...state,
        modalOpen: payload
      };

    default:
      return state;
  }
}

export function setXurData(payload) {
  return { type: SET_XUR_DATA, payload };
}

export function setXurModal(payload) {
  return { type: SET_XUR_MODAL, payload };
}
