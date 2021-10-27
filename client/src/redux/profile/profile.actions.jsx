import types from "./profile.types";
import * as utils from "./profile.utils";

export const editAboutMe = (...args) => ({
  type: types.EDIT_ABOUT_ME,
  payload: utils.editAboutMe(...args),
});

export const addNewDegree = (...args) => ({
  type: types.ADD_NEW_DEGREE,
  payload: utils.addNewDegree(...args),
});
