import { Form, Input, Button } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../utils/api";

import showError from "../utils/showError";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const onFinish = async (values: any) => {
    try {
      //send values as payload
      await api.post("/users/login", values);
      navigate("/");
    } catch (error) {
      console.log({ error });
      showError((error as any).response.data.errorMessage);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
    showError(errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
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
