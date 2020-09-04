import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "@/api/client";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (_, { rejectWithValue }) => {
    try {
      const response = await client.get("movies/find/");
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }

      return rejectWithValue(err.response.data);
    }
  }
);

export const fetchMovieCurrent = createAsyncThunk(
  "movies/fetchMovieCurrent",
  async (id, { rejectWithValue }) => {
    try {
      const response = await client.get(`movies/find/${id}`);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }

      return rejectWithValue(err.response.data);
    }
  }
);

export const createMovie = createAsyncThunk(
  "movies/createMovie",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await client.post("movies/create", payload);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }

      return rejectWithValue(err.response.data);
    }
  }
);

export const uploadMovieList = createAsyncThunk(
  "movies/uploadMovieList",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await client.upload("movies/upload", payload);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }

      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteMovie = createAsyncThunk("movies/deleteMovie", async id => {
  const response = await client.del(`movies/delete/${id}`);

  return response.data;
});
