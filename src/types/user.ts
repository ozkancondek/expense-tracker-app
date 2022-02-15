import { ThunkDispatch } from "redux-thunk";

export interface User {
  message: string;
  username: string;
  email: string;
  full_name: string;
  token: string;
}

//export const userReducer = (state:UserState,action)=>{
export interface UserState {
  data: User;
  loading: boolean;
  error: string;
}

//Login info interface

export interface LoginForm {
  username: string;
  password: string;
}

//types for action

//types of dispatch when user log in
interface LOGIN_START {
  type: "LOGIN_START";
}

interface LOGIN_SUCCESS {
  type: "LOGIN_SUCCESS";
  //if login successfull, i want to send user object as payload to state
  payload: User;
}

interface LOGIN_ERROR {
  type: "LOGIN_ERROR";
}

interface IS_LOGGED_IN_START {
  type: "IS_LOGGED_IN_START";
}

interface IS_LOGGED_IN_SUCCESS {
  type: "IS_LOGGED_IN_SUCCESS";
  payload: User;
}

interface IS_LOGGED_IN_ERROR {
  type: "IS_LOGGED_IN_ERROR";
}

interface LOGOUT {
  type: "LOGOUT";
}
//collect them all as useractions
export type UserAction =
  | LOGIN_START
  | LOGIN_SUCCESS
  | LOGIN_ERROR
  | IS_LOGGED_IN_START
  | IS_LOGGED_IN_SUCCESS
  | IS_LOGGED_IN_ERROR
  | LOGOUT;

export type UserDispatch = ThunkDispatch<UserState, void, UserAction>;
