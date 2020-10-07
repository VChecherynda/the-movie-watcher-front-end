import client from "@api/client";
import * as actions from "./actions";

export function fetchMovies(page) {
  return async function (dispatch) {
    const { pending, success, error } = actions.fetchMovies;

    dispatch(pending(true));

    try {
      const response = await client.get(`movies/find/${page}`);

      dispatch(pending(false));
      dispatch(success(response.data));
    } catch (err) {
      dispatch(pending(false));

      if (!err.response) {
        return dispatch(error(err));
      }

      dispatch(error(err.response.data));
    }
  };
}

export function fetchMovieCurrent(id) {
  return async function (dispatch) {
    const { pending, success, error } = actions.fetchMovieCurrent;
    dispatch(pending(true));

    try {
      const response = await client.get(`movies/find-one/${id}`);

      dispatch(pending(false));
      dispatch(success(response.data));
    } catch (err) {
      dispatch(pending(false));

      if (!err.response) {
        return dispatch(error(err));
      }

      dispatch(error(err.response.data));
    }
  };
}

export function createMovie(payload) {
  return async function (dispatch) {
    const { pending, success, error } = actions.createMovie;
    dispatch(pending(true));

    try {
      const response = await client.post("movies/create", payload);
      dispatch(pending(false));
      dispatch(success(response.data));
    } catch (err) {
      dispatch(pending(false));

      if (!err.response) {
        return dispatch(error(err));
      }

      dispatch(error(err.response.data));
    }
  };
}

export function uploadMovieList(payload) {
  return async function (dispatch) {
    const { pending, success, error } = actions.uploadMovies;
    dispatch(pending(true));

    try {
      const response = await client.post("movies/upload", payload, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      dispatch(pending(false));
      dispatch(success(response.data));
    } catch (err) {
      dispatch(pending(false));

      if (!err.response) {
        return dispatch(error(err));
      }

      dispatch(error(err.response.data));
    }
  };
}

export function deleteMovie(id) {
  return async function (dispatch) {
    const { pending, success, error } = actions.deleteMovie;
    dispatch(pending(true));

    try {
      const response = await client.delete(`movies/delete/${id}`);
      dispatch(pending(false));
      dispatch(success(response.data));
    } catch (err) {
      dispatch(pending(false));

      if (!err.response) {
        return dispatch(error(err));
      }

      dispatch(error(err.response.data));
    }
  };
}
