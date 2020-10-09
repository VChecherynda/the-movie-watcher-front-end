import { API_REQUEST } from "@store/modules/ui/types";
import client from "@api/client";

const constructUrl = (url, query) => (query ? `${url}/${query}` : url);

// this middleware care only for API calls
export const api = ({ dispatch }) => (next) => (action) => {
  if (action.type === API_REQUEST) {
    const { method, data, url, query, onSuccess, onError } = action.meta;

    client({
      method,
      url: constructUrl(url, query),
      data,
    })
      .then((response) => {
        dispatch({ type: onSuccess, payload: response.data });
      })
      .catch((error) => {
        const errorMessage = error?.response ? error.response.data : error;

        console.log('errorMessage', errorMessage);

        dispatch({ type: onError, payload: errorMessage });
      });
  }

  return next(action);
};

export default api;
