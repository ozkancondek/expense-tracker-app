import { Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppState } from "../store";
import { isLoggedIn } from "../store/actions/userActions";

export const AppHeader = () => {
  const { data, loading, error } = useSelector((state: AppState) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isLoggedIn());
  }, []);
  return (
    <div>
      {" "}
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal">
          {data.username ? (
            <React.Fragment>
              <Menu.Item onClick={() => navigate("/logout")}>Logout</Menu.Item>
              <Menu.Item onClick={() => navigate("/categories")}>
                Categories
              </Menu.Item>
              <Menu.Item onClick={() => navigate("/records")}>
                Records
              </Menu.Item>
            </React.Fragment>
          ) : loading ? null : (
            <React.Fragment>
              <Menu.Item onClick={() => navigate("/login")}>Login</Menu.Item>
              <Menu.Item onClick={() => navigate("/signup")}>Signup</Menu.Item>
            </React.Fragment>
          )}
        </Menu>
      </Header>
    </div>
  );
};
