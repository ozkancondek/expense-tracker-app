import { combineReducers } from "redux";

//global state types
interface AppStore {
  user: any;
  categories: any;
  records: any;
}

const rootReducer = combineReducers<AppStore>({
  user: () => {},
  categories: () => {},
  records: () => {},
});

export default rootReducer;
