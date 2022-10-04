import { Button, Col, Form, Input, Row } from "antd";
import { Typography } from "antd";
import { FormStyle } from "./ChangePasswordStyle";

export default function ChangePassword() {
  const { Title } = Typography;

  const handleSubmitForm = (values: any) => {
    console.log("Success:", values);
  }

  return (
    <FormStyle>
      <Row>
        <Col>
          <Title level={3} type="success">
            Đổi mật khẩu
          </Title>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Form onFinish={handleSubmitForm}>
            <Form.Item
              label="Tài khoản"
              name="username"
              rules={[
                { required: true, message: "Tên đăng nhập không để trống" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Mật khẩu cũ"
              name="password-old"
              rules={[
                { required: true, message: "Mật khẩu không được để trống" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Mật khẩu mới"
              name="password-new"
              rules={[
                { required: true, message: "Mật khẩu không được để trống" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Xác nhận mật khẩu mới"
              name="confirm-password-new"
              rules={[
                {
                  required: true,
                  message: "Mật khẩu không được để trống",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 12, span: 24 }}>
              <Button type="primary" htmlType="submit">
                Đổi mật khẩu
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </FormStyle>
  );
}
