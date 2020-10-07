import * as ACTION_TYPES from "./types";

import { createAction } from "@helpers/actions";

//COMMON
export const showModal = createAction(ACTION_TYPES.SHOW_MODAL);
export const setModalType = createAction(ACTION_TYPES.SET_MODAL_TYPE);
export const setRedirectTo = createAction(ACTION_TYPES.SET_REDIRECT_TO);
export const setModalData = createAction(ACTION_TYPES.SET_MODAL_DATA);
export const clearModal = createAction(ACTION_TYPES.CLEAR_MODAL);
