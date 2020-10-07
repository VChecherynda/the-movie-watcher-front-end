import * as ACTION_TYPES from "./types";

import { createAction } from "@helpers/actions";

export default {
  //COMMON
  showModal: createAction(ACTION_TYPES.SHOW_MODAL),
  setModalType: createAction(ACTION_TYPES.SET_MODAL_TYPE),
  setRedirectTo: createAction(ACTION_TYPES.SET_REDIRECT_TO),
  setModalData: createAction(ACTION_TYPES.SET_MODAL_DATA),
  clearModal: createAction(ACTION_TYPES.CLEAR_MODAL),
};
