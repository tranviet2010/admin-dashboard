import { Col, Row } from "antd";
import ButtonCheck from "../../../components/Button/Button";
import Tabinput from "../../../components/input/TabInput";
import TableEmail from "./TableEmail";

export default function LS_Email() {
  return (
    <>
      <Row>
        <Col span={8}>
          <Tabinput title="Mã tài khoản" disble />
        </Col>
        <Col span={8}>
          <Tabinput title="Tên khách hàng" disble />
        </Col>
        <Col span={8}>
          <Tabinput title="CMNN/TCC/HC" disble />
        </Col>
        <Col span={8}>
          <Tabinput title="Từ thời gian" typeInput="date" />
        </Col>
        <Col span={8}>
          <Tabinput title="Đến thời gian" typeInput="date" />
        </Col>
      </Row>
      <Row>
        <Col span={8}>
          <Tabinput title="Loại email" />
        </Col>
        <Col span={8}>
          <Tabinput title="Email" />
        </Col>
      </Row>
      <Row justify="end">
        <ButtonCheck title="Tra cứu" />
      </Row>
      <Row >
        <TableEmail />
      </Row>
    </>
  );
}
