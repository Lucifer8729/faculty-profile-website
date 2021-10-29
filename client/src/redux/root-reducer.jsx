import { combineReducers } from "redux";

import profileReducer from "./profile/profile.reducer";
import publicationReducer from "./publication/publications.reducer";
import patentReducer from "./patent/patent.reducer";
import courseReducer from "./course/course.reducer";

const rootReducer = combineReducers({
  profileReducer,
  publicationReducer,
  patentReducer,
  courseReducer,
});

export default rootReducer;
