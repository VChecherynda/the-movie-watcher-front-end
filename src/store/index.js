import { configureStore } from "@reduxjs/toolkit";

import modals from "./modules/modals/reducer";
import movies from "./modules/movies/reducer";

export default configureStore({
  reducer: {
    modals,
    movies
  },
  devTools: true
});
