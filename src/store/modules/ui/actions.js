import * as ACTION_TYPES from "./types";

export const apiRequest = ({
  method,
  url,
  query,
  data,
  onSuccess,
  onError,
}) => ({
  type: ACTION_TYPES.API_REQUEST,
  payload: data,
  meta: { method, url, query, data, onSuccess, onError },
});

export const showSpinner = () => ({
  type: ACTION_TYPES.SHOW_SPINNER,
  payload: true,
});

export const hideSpinner = () => ({
  type: ACTION_TYPES.HIDE_SPINNER,
  payload: false,
});

export const redirectTo = (path) => ({
  type: ACTION_TYPES.REDIRECT_TO,
  payload: path,
});
