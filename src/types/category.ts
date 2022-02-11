import { ThunkDispatch } from "redux-thunk";

export interface CategoryState {
  data: Category[];
  loading: boolean;
  error: string;
}

export interface Category {
  id: number;
  name: string;
  type: string;
  color: string;
}

interface GET_START {
  type: "GET_CATEGORIES_START";
}

interface GET_SUCCESS {
  type: "GET_CATEGORIES_SUCCESS";
  //if login successfull, i want to send user object as payload to state
  payload: Category[];
}

interface GET_ERROR {
  type: "GET_CATEGORIES_ERROR";
}

export type CategoryAction = GET_START | GET_ERROR | GET_SUCCESS;
export type CategoryDispatch = ThunkDispatch<
  CategoryState,
  void,
  CategoryAction
>;
