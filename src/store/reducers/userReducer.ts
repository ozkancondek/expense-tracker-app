import { User, UserAction, UserState } from "../../types/user";

//check return data from  Api   to define interface
/* my response is : 
{
  "message": "Login successful!",
  "username": "reactdersleri",
  "email": "reactdersleri@gmail.com",
  "full_name": "React Dersleri",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjI1Mzk3NDcwLCJleHAiOjE2MjU0ODM4NzB9.gnobD0fMfOuSbAdr_MqKa1uqLaAKJayvPaeEac9I1iI"
} */

//go types folder and define this interface

//define a default state

const defaultState: UserState = {
  // give it to state then my app start with this object
  data: {} as User, // data:{} if use this format get an error because it expect user informations
  loading: false,
  error: "",
};

export const userReducer = (
  state: UserState = defaultState,
  action: UserAction
) => {
  return state;
};
