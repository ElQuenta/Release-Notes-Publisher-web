import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { useRouter } from "next/router";

interface SignUpFormValues {
  username: string;
  email: string;
  password: string;
  remember: boolean;
}

const SignUp = () => {
  const router = useRouter();

  const onFinish = (values: SignUpFormValues) => {
    console.log("Success:", values);
    router.push("/auth/sign-in");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", paddingTop: "50px" }}>
      <h1>Sign Up</h1>
      <Form
        name="signUp"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }, { type: "email", message: "The input is not valid E-mail!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;
