import { configureStore } from "@reduxjs/toolkit";

import movies from "./modules/movies/reducer";

export default configureStore({
  reducer: {
    movies
  },
  devTools: true
});
