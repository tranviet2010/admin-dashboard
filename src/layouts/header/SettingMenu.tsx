import { Menu, message, Popconfirm } from "antd";
import {
  KeyOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { useAppDispatch } from "../../stores/hook";
import { closeSiderBar } from "../../stores/sider/siderBar";

export const SettingMenu = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleChangePassword = useCallback(
    () => {
      dispatch(closeSiderBar());
      navigate("/change-password");
    },
    [],
  );

  return (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <div onClick={handleChangePassword}>
              <KeyOutlined />
              <span style={{ marginLeft: ".5rem" }}>Đổi mật khẩu</span>
            </div>
          ),
        },
        {
          key: "2",
          label: (
            <Popconfirm
              placement="bottom"
              title={"Bạn có muốn đăng xuất"}
              onConfirm={() => navigate("/login")}
              okText="Đồng ý"
              cancelText="Đóng"
            >
              <div>
                <LoginOutlined />
                <span style={{ marginLeft: ".5rem" }}>Đăng xuất</span>
              </div>
            </Popconfirm>
          ),
        },
      ]}
    />
  );
};
