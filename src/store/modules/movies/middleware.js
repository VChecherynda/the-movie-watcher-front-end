import { createAsyncThunk, unwrapResult } from "@reduxjs/toolkit";
import client from "@/api/client";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await client.get("movies/find");

  return response.data;
});

export const fetchMovieCurrent = createAsyncThunk(
  "movies/fetchMovieCurrent",
  async id => {
    const response = await client.get(`movies/find/${id}`);

    return response.data;
  }
);

export const createMovie = createAsyncThunk(
  "movies/createMovie",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await client.post("movies/create", payload);

      const result = unwrapResult(response.response);

      console.log("[response]", response);
      console.log("[result]", result);

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
