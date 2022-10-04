import { Col, Row } from "antd";
import ButtonCheck from "../../../components/Button/Button";
import Tabinput from "../../../components/input/TabInput";
import TablePromotion from "./TablePromotion";

export default function LS_Promotion() {
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
          <Tabinput title="Mã CTKM" />
        </Col>
        <Col span={8}>
          <Tabinput title="Loại CTKM" />
        </Col>
        <Col span={8}>
          <Tabinput title="Chi tiết CTKM" />
        </Col>
        <Col span={8}>
          <Tabinput title="Từ ngày" typeInput="date" />
        </Col>
        <Col span={8}>
          <Tabinput title="Đến ngày" typeInput="date" />
        </Col>
      </Row>
      <Row justify="end">
        <ButtonCheck title="Tra cứu" />
      </Row>
      <Row>
        <TablePromotion />
      </Row>
    </>
  );
}
