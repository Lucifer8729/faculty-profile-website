import types from "./profile.types";
import * as utils from "./profile.utils";

export const fetchProfile = async () => ({
  type: types.FETCH_PROFILE,
  payload: await utils.fetchProfile(),
});

export const editAboutMe = async (...args) => ({
  type: types.EDIT_ABOUT_ME,
  payload: await utils.editAboutMe(...args),
});

export const addNewDegree = (...args) => ({
  type: types.ADD_NEW_DEGREE,
  payload: utils.addNewDegree(...args),
});

export const deleteDegree = (...args) => ({
  type: types.DELETE_DEGREE,
  payload: utils.deleteDegree(...args),
});

export const addNewSkill = (...args) => ({
  type: types.ADD_NEW_SKILL,
  payload: utils.addNewSkill(...args),
});

export const deleteSkill = (...args) => ({
  type: types.DELETE_SKILL,
  payload: utils.deleteSkill(...args),
});
