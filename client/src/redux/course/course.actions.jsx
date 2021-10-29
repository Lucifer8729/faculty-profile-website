import types from "./course.types";
import * as utils from "./course.utils";

export const addNewCourse = (...args) => ({
  type: types.ADD_NEW_COURSE,
  payload: utils.addNewCourse(...args),
});

export const deleteCourse = (...args) => ({
  type: types.DELETE_COURSE,
  payload: utils.deleteCourse(...args),
});

export const editCourse = (...args) => ({
  type: types.EDIT_COURSE,
  payload: utils.editCourse(...args),
});
