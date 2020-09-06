import { string, bool, func } from "prop-types";

export const defaultTypes = {
  id: undefined,
  title: undefined,
  value: undefined,
  touched: false,
  error: undefined,
  name: undefined,
  changed: undefined,
  blured: undefined
};

export const types = {
  id: string,
  title: string,
  value: string,
  touched: bool,
  error: string,
  name: string,
  changed: func,
  blured: func
};
