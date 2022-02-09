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
