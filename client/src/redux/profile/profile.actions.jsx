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

export const addNewDegree = async (...args) => ({
  type: types.ADD_NEW_DEGREE,
  payload: await utils.addNewDegree(...args),
});

export const deleteDegree = async (...args) => ({
  type: types.DELETE_DEGREE,
  payload: await utils.deleteDegree(...args),
});

export const addNewSkill = async (...args) => ({
  type: types.ADD_NEW_SKILL,
  payload: await utils.addNewSkill(...args),
});

export const deleteSkill = async (...args) => ({
  type: types.DELETE_SKILL,
  payload: await utils.deleteSkill(...args),
});
