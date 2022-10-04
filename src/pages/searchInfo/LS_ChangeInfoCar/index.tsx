import { Col, Row } from "antd";
import Tabinput from "../../../components/input/TabInput";
import SelectOption from "../../../components/input/SelectOption";
import ButtonCheck from "../../../components/Button/Button";
import TableChangeInfoCar from "./TableChangeInfoCar";

export default function LS_ChangeInfoCar() {
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
          <SelectOption title="Nội dung thay đổi" data={[]} />
        </Col>
        <Col span={8}>
          <Tabinput title="Từ thời gian" typeInput="date" />
        </Col>
        <Col span={8}>
          <Tabinput title="Đến thời gian" typeInput="date" />
        </Col>
        <Col span={8}>
          <Tabinput title="Biển số xe" />
        </Col>
      </Row>
      <Row justify="end">
        <ButtonCheck title="Tra cứu" />
      </Row>
      <Row>
        <TableChangeInfoCar />
      </Row>
    </>
  );
}
