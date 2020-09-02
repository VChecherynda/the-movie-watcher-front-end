import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "@/api/client";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await client.get("movies/find");

  return response;
});
