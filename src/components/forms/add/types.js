import { bool, string, func, shape } from "prop-types";

export const defaultTypes = {
  isBtnDisabled: false,
  changed: undefined,
  upload: undefined,
  inputRef: null,
  listLabel: ""
};

export const types = {
  isBtnDisabled: bool,
  changed: func,
  upload: func,
  inputRef: shape({
    current: shape({})
  }),
  listLabel: string
};
