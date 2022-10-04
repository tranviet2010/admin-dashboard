import { Col, Row } from "antd";
import ButtonCheck from "../../../components/Button/Button";
import Tabinput from "../../../components/input/TabInput";
import TableReceipt from "./TableReceipt";

export default function LS_Receipt() {
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
          <Tabinput title="Loại giao dịch" />
        </Col>
        <Col span={8}>
          <Tabinput title="Chu kỳ hóa đơn" />
        </Col>
        <Col span={8}>
          <Tabinput title="Số hóa đơn" />
        </Col>
        <Col span={8}>
          <Tabinput title="Trạng thái" />
        </Col>
        <Col span={8}>
          <Tabinput title="Từ ngày" typeInput="date" />
        </Col>
        <Col span={8}>
          <Tabinput title="Đến ngày" typeInput="date" />
        </Col>
        <Col span={8}>
          <Tabinput title="Biển số xe" />
        </Col>
      </Row>
      <Row justify="end">
        <ButtonCheck title="Tra cứu" />
      </Row>
      <Row>
        <TableReceipt />
      </Row>
    </>
  );
}
