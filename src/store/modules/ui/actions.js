import * as ACTION_TYPES from "./types";

export const apiRequest = ({
  method,
  url,
  query,
  body,
  onSuccess,
  onError,
}) => ({
  type: ACTION_TYPES.API_REQUEST,
  payload: body,
  meta: { method, url, query, body, onSuccess, onError },
});

export const showSpinner = () => ({
  type: ACTION_TYPES.SHOW_SPINNER,
  payload: true,
});

export const hideSpinner = () => ({
  type: ACTION_TYPES.HIDE_SPINNER,
  payload: false,
});
