import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "@/api/client";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await client.get("movies/find");

  return response;
});

export const fetchMovieCurrent = createAsyncThunk(
  "movies/fetchMovieCurrent",
  async id => {
    const response = await client.get(`movies/find/${id}`);

    return response;
  }
);

export const createMovie = createAsyncThunk(
  "movies/createMovie",
  async payload => {
    const response = await client.post("movies/create", payload);

    return response;
  }
);

export const deleteMovie = createAsyncThunk("movies/deleteMovie", async id => {
  const response = await client.del(`movies/delete/${id}`);

  return response;
});
