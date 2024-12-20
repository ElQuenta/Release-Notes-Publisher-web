import { Row, Col } from "antd";

const Footer = () => {
  return (
    <Row
      style={{
        background: "#001529",
        color: "#fff",
        textAlign: "center",
        padding: "20px 10px",
      }}
    >
      <Col span={24}>
        © 2024 Release Notes Publisher. All Rights Reserved.
      </Col>
    </Row>
  );
};

export default Footer;
