import { SHOW_SPINNER, HIDE_SPINNER } from "./types";

import initialState from "./initialState";

function uiReducer(state = initialState, action) {
  switch (action.type) {

    case SHOW_SPINNER:
      return {
        ...state,
        spinner: true
      };

    case HIDE_SPINNER:
      return {
        ...state,
        spinner: false,
      };

    default:
      return state;
  }
}

export default uiReducer;
