import { Menu } from "antd";
import { BellOutlined } from "@ant-design/icons";

export const NotifyMenu = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <div>
            <BellOutlined />
            <span style={{ marginLeft: ".5rem" }}>
              Có <b>16</b> đơn hàng cần duyệt từ đại lý
            </span>
          </div>
        ),
      },
      {
        key: "2",
        label: (
          <div>
            <BellOutlined />
            <span style={{ marginLeft: ".5rem" }}>
              Có <b>16</b> đơn hàng cần duyệt từ đại lý
            </span>
          </div>
        ),
      },
    ]}
  />
);
