import React from "react";
import { Form, Input } from "antd";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import showError from "../utils/showError";
import { showSuccess } from "../utils/showSuccess";

function SignUp() {
  const navigate = useNavigate();
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  //make post request when user entered all of requored data
  const onFinish = async (values: any) => {
    try {
      //send values as payload
      await api().post("/users/register", values);
      navigate("/login");
      showSuccess("You registered successfully");
    } catch (error) {
      console.log({ error });
      showError((error as any).response.data.errorMessage);
    }
  };
  return (
    <div>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <h2 style={{ textAlign: "center", marginBottom: 40 }}>
          Register for an acoount
        </h2>
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Please input your password!", min: 6 },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ type: "email", required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="full_name" label="Full Name">
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default SignUp;
