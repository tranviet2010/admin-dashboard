import { Button, Typography, Form, Input, Carousel } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import logo from "../../../static/images/logos/vetc.png";
import { CarouselsStyle, LoginStyle } from "./loginStyle";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../stores/hook";
import { openSiderBar } from "../../../stores/sider/siderBar";
import bg1 from "../../../static/images/bg/bg-1.jpg";
import bg2 from "../../../static/images/bg/bg-2.jpg";

const { Title } = Typography;

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <>
      <Carousel autoplay dots={false}>
        <div>
          <CarouselsStyle style={{ background: `url(${bg1})` }} />
        </div>
        <div>
          <CarouselsStyle style={{ background: `url(${bg2})` }} />
        </div>
      </Carousel>
      <LoginStyle>
        <div className="form-login">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="form">
            <div className="title">
              <Title level={2}>Đăng nhập</Title>
              <Title level={4}>Cổng thông tin dành cho đại lý</Title>
            </div>
            <Form
              className="form-content"
              onFinish={() => {
                dispatch(openSiderBar());
                navigate("/");
              }}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Tên đăng nhập không được bỏ trống!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Tên đăng nhập"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Mật khẩu không được bỏ trống!" },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Mật khẩu"
                />
              </Form.Item>
              <div className="button">
                <Button type="primary" htmlType="submit">
                  Đăng nhập
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </LoginStyle>
    </>
  );
}
