import { createAsyncThunk } from "@reduxjs/toolkit";
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
      return response.data;
    } catch (err) {
      console.log(err);

      if (!err.response) {
        throw err;
      }

      console.log("[err]", err);

      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteMovie = createAsyncThunk("movies/deleteMovie", async id => {
  const response = await client.del(`movies/delete/${id}`);

  return response.data;
});
