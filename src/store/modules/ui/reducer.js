import { SHOW_SPINNER, HIDE_SPINNER, REDIRECT_TO } from "./types";

import initialState from "./initialState";

function uiReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_SPINNER:
      return {
        ...state,
        spinner: true,
      };

    case HIDE_SPINNER:
      return {
        ...state,
        spinner: false,
      };

    case REDIRECT_TO:
      return {
        ...state,
        redirectTo: action.payload,
      };

    default:
      return state;
  }
}

export default uiReducer;
