import { Col, Radio, Row } from "antd";
import React from "react";
import Tabinput from "../../../../components/input/TabInput";

export default function GeneralInfo() {
  return (
    <div>
      <Row justify="space-around">
        <Col span={8}>
          <Tabinput title="CMND/Thẻ căn cước" disble />
        </Col>
        <Col span={8}>
          <Tabinput title="Ngày cấp CMND/TCC" disble />
        </Col>
        <Col span={8}>
          <Tabinput title="Nơi cấp CMND/TCC" disble />
        </Col>
      </Row>

      <Row justify="space-around">
        <Col span={8}>
          <Tabinput title="Họ tên" disble />
        </Col>
        <Col span={8}>
          <Tabinput title="Ngày sinh" disble />
        </Col>
        <Col span={8}>
          <Row justify="space-around" align="middle">
            <Col span={6}>
              <p style={{ marginBottom: "0px", fontSize: "13px" }}>Giới tính</p>
            </Col>
            <Col span={16}>
              <Radio.Group>
                <Radio value={1}>Nam</Radio>
                <Radio value={2}>Nữ</Radio>
              </Radio.Group>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row justify="space-around">
        <Col span={8}>
          <Tabinput title="Quốc tịch" disble />
        </Col>
        <Col span={8}>
          <Row justify="space-around" align="middle">
            <Col span={6}>
              <p style={{ marginBottom: "0px", fontSize: "13px" }}>
                Chu kỳ hóa đơn
              </p>
            </Col>
            <Col span={16}>
              <Radio.Group>
                <Radio value={1}>Theo giao dịch</Radio>
                <Radio value={2}>Theo tháng</Radio>
              </Radio.Group>
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <Tabinput title="Ngày Hiệu lực" disble />
        </Col>
      </Row>

      {/* <Row justify="space-around">
                <Col span={24}>
                    <Tabinput title="Đ/c thường trú" disble />
                </Col>
            </Row> */}

      <Row justify="space-around">
        <Col span={8}>
          <Tabinput title="Tỉnh/TP" disble />
        </Col>
        <Col span={8}>
          <Tabinput title="Quận/Huyện" disble />
        </Col>
        <Col span={8}>
          <Tabinput title="Phường/Xã" disble />
        </Col>
      </Row>

      <Row justify="space-around">
        <Col span={8}>
          <Tabinput title="Tổ/Thôn" disble />
        </Col>
        <Col span={8}>
          <Tabinput title="Đường" disble />
        </Col>
        <Col span={8}>
          <Tabinput title="Số nhà" disble />
        </Col>
      </Row>

      {/* <Row justify="space-around">
                <Col span={24}>
                    <Tabinput title="Đ/c liên hệ" disble />
                </Col>

            </Row> */}

      <Row justify="space-around">
        <Col span={8}>
          <Tabinput title="Tỉnh/TP" disble />
        </Col>
        <Col span={8}>
          <Tabinput title="Quận/Huyện" disble />
        </Col>
        <Col span={8}>
          <Tabinput title="Phường/Xã" disble />
        </Col>
      </Row>

      <Row justify="space-around">
        <Col span={8}>
          <Tabinput title="Tổ/Thôn" disble />
        </Col>
        <Col span={8}>
          <Tabinput title="Đường" disble />
        </Col>
        <Col span={8}>
          <Tabinput title="Số nhà" disble />
        </Col>
      </Row>

      <Row justify="space-around">
        <Col span={8}>
          <Tabinput title="Di động" disble />
        </Col>
        <Col span={8}>
          <Tabinput title="Điện thoại cố định" disble />
        </Col>
        <Col span={8}>
          <Tabinput title="Email" disble />
        </Col>
      </Row>

      <Row justify="space-around">
        <Col span={8}>
          <Tabinput title="Mã tài khoản" disble />
        </Col>
        <Col span={8}>
          <Tabinput title="Nhận thông báo qua" disble />
        </Col>
        <Col span={8}></Col>
      </Row>

      <Row justify="space-around">
        <Col span={8}>
          <Tabinput title="Trạng thái tài khoản" disble />
        </Col>
        <Col span={8}></Col>
        <Col span={8}></Col>
      </Row>
    </div>
  );
}
