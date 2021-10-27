import types from "./publications.types";
import * as utils from "./publications.utils";

export const addNewPublication = (...args) => ({
  type: types.ADD_NEW_PUBLICATION,
  payload: utils.addNewPublication(...args),
});

export const deletePublication = (...args) => ({
  type: types.DELETE_PUBLICATION,
  payload: utils.deletePublication(...args),
});
