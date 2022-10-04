import { Badge, Dropdown, Space } from "antd";
import { HeaderContainer } from "./HeadersStyle";
import {
  BellOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { SettingMenu } from "./SettingMenu";
import { NotifyMenu } from "./NotifyMenu";
import { MainColor } from "../../components/variable/Variable";

export default function Headers() {
  return (
    <HeaderContainer>
      <div className="headerContainer">
        <div className="logo" />
        <div className="infomation">
          <Dropdown
            overlay={NotifyMenu}
            trigger={["click"]}
            placement="bottomRight"
          >
            <Badge count={32} showZero>
              <BellOutlined
                style={{ color: `${MainColor}` }}
                onClick={(e) => e.preventDefault()}
              />
            </Badge>
          </Dropdown>
          <Dropdown overlay={<SettingMenu />} trigger={["click"]}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <span>Quản trị hệ thống</span>
                VETC
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
    </HeaderContainer>
  );
}
