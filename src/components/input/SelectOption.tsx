import { Col, Row, Select } from "antd";
import styled from "styled-components";
const { Option } = Select;

export default function SelectOption(props: {
  title?: string;
  onChang?: any;
  onSearch?: any;
  disble?: boolean;
  data?: any;
}) {
  const InputStyle = styled.div`
    margin-top: 5px;
    p {
      margin-bottom: 0px;
      font-size: 13px;
    }
  `;
  return (
    <InputStyle>
      <Row justify="space-around" align="middle">
        <Col span={6}>
          <p>{props.title}</p>
        </Col>
        <Col span={16}>
          <Select defaultValue="Tất cả" style={{ width: "100%" }} size="small">
            {props.data.map((val: any) => (
              <Option value="jack">{val.name}</Option>
            ))}
          </Select>
        </Col>
      </Row>
    </InputStyle>
  );
}
