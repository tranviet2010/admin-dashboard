import React, { useState, useMemo } from "react";
import { Menu, MenuProps } from "antd";
import { NavLink } from "react-router-dom";
import { PieChartOutlined } from "@ant-design/icons";
import { SliderStyle } from "./SliderStyle";
import routers, { Routers } from "../../routers/routers";

type MenuItem = Required<MenuProps>["items"][number];

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
};

const rootSubmenuKeys = routers.map((item) => item.id.toString());

export const Slider: React.FC = () => {
  const [openKeys, setOpenKeys] = useState([routers[0].id.toString()]);

  const items2: any = (routes: Routers[]) =>
    routes.map((item) =>
      !item.children
        ? getItem(
            <NavLink to={item.path}>{item.name}</NavLink>,
            `${item.id}`,
            item.icon && <item.icon />
          )
        : item.children &&
          getItem(
            `${item.name}`,
            `${item.id}`,
            item.icon && <item.icon />,
            items2(item.children)
          )
    );
  
  const item = useMemo(() => items2(routers), []);

  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const onSelectItem: MenuProps["onSelect"] = (data) => {
    setOpenKeys(pre => data.keyPath);
  };

  return (
    <SliderStyle>
      <Menu
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        items={item}
        onSelect={onSelectItem}
      />
    </SliderStyle>
  );
};
