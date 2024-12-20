import { Button, Space } from "antd";

const HeaderRight = () => {
  return (
    <div style={{ fontSize: "14px" }}>
      <Space style={{ justifyContent: "end" }} size="small" wrap>
        <Button type="primary" size="large" href="/app/ui/auth/singUp.tsx">
          Sign Up
        </Button>
        <Button size="large" href="/app/ui/auth/singIn.tsx">
          Sign In
        </Button>
      </Space>
    </div>
  );
};

export default HeaderRight;
