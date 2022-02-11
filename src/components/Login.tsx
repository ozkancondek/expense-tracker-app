import { Form, Input, Button } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppState } from "../store";

import { login } from "../store/actions/userActions";
import { LoginForm } from "../types/user";
import api from "../utils/api";

import showError from "../utils/showError";
import { showSuccess } from "../utils/showSuccess";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: AppState) => state.user);

  const onFinish = (values: LoginForm) => {
    dispatch(login(values));
  };
  //show me error
  useEffect(() => {
    error && showError(error);
  }, [error]);

  //if logged in, give me message
  useEffect(() => {
    data.username && showSuccess("You have successfully logged in!");
  }, [data.username]);

  //go to main page if i logged in before
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [data]);

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      /*  onFinishFailed={onFinishFailed} */
      autoComplete="off"
    >
      <h2 style={{ textAlign: "center", marginBottom: 40 }}>Please Login</h2>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Login;
