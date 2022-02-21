import types from "./patent.types";
import * as utils from "./patent.utils";

export const fetchPatents = async (...args) => ({
  type: types.FETCH_PATENTS,
  payload: await utils.fetchPatents(...args),
});

export const addNewPatent = async (...args) => ({
  type: types.ADD_NEW_PATENT,
  payload: await utils.addNewPatent(...args),
});

export const deletePatent = async (...args) => ({
  type: types.DELETE_PATENT,
  payload: await utils.deletePatent(...args),
});
