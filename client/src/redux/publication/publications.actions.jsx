import types from "./publications.types";
import * as utils from "./publications.utils";

export const fetchPublications = async () => ({
  type: types.FETCH_PUBLICATIONS,
  payload: await utils.fetchPublications(),
});

export const addNewPublication = async (...args) => ({
  type: types.ADD_NEW_PUBLICATION,
  payload: await utils.addNewPublication(...args),
});

export const deletePublication = async (...args) => ({
  type: types.DELETE_PUBLICATION,
  payload: await utils.deletePublication(...args),
});
