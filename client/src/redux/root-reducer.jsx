import { combineReducers } from "redux";

import profileReducer from "./profile/profile.reducer";
import publicationReducer from "./publication/publications.reducer";
import patentReducer from "./patent/patent.reducer";

const rootReducer = combineReducers({
  profileReducer,
  publicationReducer,
  patentReducer,
});

export default rootReducer;
