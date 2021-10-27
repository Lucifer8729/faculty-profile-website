import { combineReducers } from "redux";

import profileReducer from "./profile/profile.reducer";
import publicationReducer from "./publication/publications.reducer";

const rootReducer = combineReducers({
  profileReducer,
  publicationReducer,
});

export default rootReducer;
