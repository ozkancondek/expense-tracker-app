import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Categories from "../components/Categories";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

const privateComponent = {
  categories: <Categories />,
};

export const AllRoutes = () => {
  /*  const renderPrivate = (path: keyof typeof privateComponent) => {
    const token = localStorage.getItem("token");
    if (token) {
      return <Route path={path} element={privateComponent[path]} />;
    }
    return <Route element={<Navigate to="/" />} />;
  };
  const token = false; */
  return (
    <div>
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/categories" element={<Categories />} />
        {/*  {renderPrivate("categories")} */}
      </Routes>
    </div>
  );
};
