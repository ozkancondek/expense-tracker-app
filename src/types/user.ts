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

//types for action

//types of dispatch when user log in
interface LGOIN_START {
  type: "LGOIN_START";
}

interface LOGIN_SUCCESS {
  type: "LOGIN_SUCCESS";
  //if login successfull, i want to send user object as payload to state
  payload: User;
}

interface LGOIN_ERROR {
  type: "LGOIN_ERROR";
}

//collect them all as useractions
export type UserAction = LGOIN_START | LOGIN_SUCCESS | LGOIN_ERROR;
