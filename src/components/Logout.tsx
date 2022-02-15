import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { AppState } from "../store";
import { logout } from "../store/actions/userActions";

function Logout() {
  const { data } = useSelector((state: AppState) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());
  }, []);

  if (!data.username) {
    navigate("/login");
  }

  return <div>Logging out...</div>;
}

export default Logout;
