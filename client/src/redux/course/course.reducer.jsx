import types from "./course.types";
import {
  SAMPLE_COURSE_DATA,
  SAMPLE_COURSE_CONTENT,
} from "../../components/UI/SAMPLE_DATA";

const INITIAL_STATE = {
  CourseList: [...SAMPLE_COURSE_DATA],
  Courses: {
    ...SAMPLE_COURSE_CONTENT,
  },
};

const courseReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_NEW_COURSE:
      return {
        ...state,
        CourseList: [action.payload, ...state.CourseList],
        Courses: {
          ...state.Courses,
          [`${action.payload.id}`]: {},
        },
      };

    case types.DELETE_COURSE:
      return {
        ...state,
        CourseList: [...action.payload.newList],
      };

    case types.EDIT_COURSE:
      return {
        ...state,
        CourseList: [...action.payload.newList],
      };

    default:
      return state;
  }
};

export default courseReducer;
