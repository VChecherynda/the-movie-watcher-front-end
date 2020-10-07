import {
  SHOW_MODAL,
  SET_MODAL_TYPE,
  SET_REDIRECT_TO,
  SET_MODAL_DATA,
  CLEAR_MODAL,
} from "./types";

import initialState from "./initialState";

function modalReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        show: action.payload,
      };

    case SET_MODAL_TYPE:
      return {
        ...state,
        type: action.payload,
      };

    case SET_REDIRECT_TO:
      return {
        ...state,
        redirectTo: action.payload,
      };

    case SET_MODAL_DATA:
      return {
        ...state,
        data: action.payload,
      };

    case CLEAR_MODAL:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
}

export default modalReducer;
