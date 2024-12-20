import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { useRouter } from "next/router";

interface SignInFormValues {
  email: string;
  password: string;
  remember: boolean;
}

const SignIn = () => {
  const router = useRouter();

  const onFinish = (values: SignInFormValues) => {
    console.log("Success:", values);
    router.push("/");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", paddingTop: "50px" }}>
      <h1>Sign In</h1>
      <Form
        name="signIn"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        layout="vertical"
      >
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
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignIn;
