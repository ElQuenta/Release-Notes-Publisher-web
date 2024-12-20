import { Col, Row } from "antd";
import HeaderLeft from "./headerLeft";
import HeaderRight from "./headerRight";

const Header = () => {
  return (
    <Row style={{ background: "#001529", color: "#fff", padding: "10px 20px" }}>
      <Col span={12}>
        <HeaderLeft />
      </Col>
      <Col span={12} style={{ textAlign: "right" }}>
        <HeaderRight />
      </Col>
    </Row>
  );
};

export default Header;
