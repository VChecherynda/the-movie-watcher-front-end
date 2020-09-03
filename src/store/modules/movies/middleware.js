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
