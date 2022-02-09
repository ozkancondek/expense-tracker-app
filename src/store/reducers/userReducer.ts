import { UserAction, UserState } from "../../types/user";

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

export const userReducer = (state: UserState, action: UserAction) => {
  return state;
};
