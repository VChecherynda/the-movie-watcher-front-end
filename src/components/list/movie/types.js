import { string, arrayOf, shape } from "prop-types";

export const defaultTypes = {
  movies: []
};

export const types = {
  movies: arrayOf(
    shape({
      id: string,
      title: string,
      release: string,
      format: string,
      stars: string
    })
  )
};
