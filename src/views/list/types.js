import { arrayOf, shape, bool } from "prop-types";

export const defaultTypes = {
  isPaginationExsist: undefined,
  isNotFound: undefined,
  movies: undefined,
  pagination: undefined
};

export const types = {
  isPaginationExsist: bool,
  isNotFound: bool,
  movies: arrayOf(shape({})),
  pagination: shape({})
};
