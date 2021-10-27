import types from "./patent.types";
import * as utils from "./patent.utils";

export const addNewPatent = (...args) => ({
  type: types.ADD_NEW_PATENT,
  payload: utils.addNewPatent(...args),
});

export const deletePatent = (...args) => ({
  type: types.DELETE_PATENT,
  payload: utils.deletePatent(...args),
});
