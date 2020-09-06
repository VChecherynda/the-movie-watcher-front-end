import { string, func, shape } from "prop-types";

export const defaultTypes = {
  movie: {},
  handleDeleteMovie: undefined
};

export const types = {
  movie: shape({
    id: string,
    stars: string,
    title: string
  }),
  handleDeleteMovie: func
};
