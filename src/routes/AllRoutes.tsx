import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Categories from "../components/Categories";
import Login from "../components/Login";
import Logout from "../components/Logout";
import Records from "../components/Records";

import SignUp from "../components/SignUp";
import { AppState } from "../store";
import { isLoggedIn } from "../store/actions/userActions";

export const AllRoutes = () => {
  const { data, loading, error } = useSelector((state: AppState) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isLoggedIn());
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {data.username ? (
          <React.Fragment>
            <Route path="/categories" element={<Categories />} />
            <Route path="/records" element={<Records />} />
            <Route path="/logout" element={<Logout />} />
          </React.Fragment>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </div>
  );
};

//  <Route path="/register" element={<SignUp />} />
//             <Route path="/categories" element={<Categories />} />
//             <Route path="/records" element={<Records />} />
//             <Route path="/logout" element={<Logout />} />
//              <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<SignUp />} />
