import { combineReducers } from "redux";
import modalsReducer from "./modalsReducer";
import paginationReducer from "./paginationReducer";
import tweetsReducer from "./tweetsReducer";

export default combineReducers({
  modals: modalsReducer,
  validations: paginationReducer,
  tweets: tweetsReducer,
});
