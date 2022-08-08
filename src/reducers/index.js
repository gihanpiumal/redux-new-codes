import { combineReducers } from "redux";
import reducersUserRoals from "./reducers-UserRoals";

const rootReducer = combineReducers({
  allUserRoals: reducersUserRoals,
});

export default rootReducer;
