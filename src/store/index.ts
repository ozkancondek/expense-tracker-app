import { combineReducers } from "redux";
import { UserState } from "../types/user";
import { userReducer } from "./reducers/userReducer";

//global state types
interface AppStore {
  user: UserState;
  // categories: any;
  // records: any;
}

const rootReducer = combineReducers<AppStore>({
  user: userReducer,
  // categories: () => {},
  // records: () => {},
});

export default rootReducer;
