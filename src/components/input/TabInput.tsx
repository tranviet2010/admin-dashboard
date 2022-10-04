
import { Col, DatePicker, Input, Row } from "antd";
import styled from "styled-components";

export default function Tabinput(props: {
    title?: string;
    onChang?: any;
    onSearch?: any;
    disble?: boolean;
    placeholder?: any;
    typeInput?: "date";
}) {
    const InputStyle = styled.div`
    margin-top: 5px;
    p {
      margin-bottom: 0px;
      font-size: 13px;
    }

    .ant-picker {
      width: 100%;
      padding: 0 .5rem;
    }
  `;
    return (
        <InputStyle>
            <Row justify="space-around" align="middle">
                <Col span={6}>
                    <p>{props.title}</p>
                </Col>
                <Col span={16}>
                    {props.onSearch ? (
                        <Input.Search
                            size="small"
                            disabled={props?.disble}
                            onChange={(e) => props.onChang(e.target.value)}
                            onSearch={props.onSearch}
                        />
                    ) : props.typeInput === "date" ? (
                        <DatePicker />
                    ) : (
                        <Input
                            disabled={props?.disble}
                            placeholder={props.placeholder}
                            onChange={(e) => props.onChang(e.target.value)}
                            size="small"
                        />
                    )}
                </Col>
            </Row>
        </InputStyle>
    );
}
