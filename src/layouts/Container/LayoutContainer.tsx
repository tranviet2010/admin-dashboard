import { Layout } from "antd";
import React, { useState } from "react";
import { LayoutStyle } from "./LayoutContainerStyle";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from "@ant-design/icons";
import { Slider } from "../Slider/Slider";
import Headers from "../header/Headers";
import Footers from "../footer/Footers";
import ContentContainer from "../content/ContentContainer";
import { useAppDispatch, useAppSelector } from "../../stores/hook";
import { SiderBarStore, toggleSiderBar } from "../../stores/sider/siderBar";
const { Header, Footer, Sider, Content } = Layout;


const LayoutContainer: React.FC = () => {
  const { collapsed } = useAppSelector(SiderBarStore);
  const dispatch = useAppDispatch();
  return (
    <LayoutStyle>
      <Layout>
        <Header>
          <Headers />
        </Header>
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed} width={300}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: `trigger ${collapsed && "text-center"}`,
                onClick: () => dispatch(toggleSiderBar()),
              }
            )}
            <Slider />
          </Sider>
          <Content>
            <ContentContainer />
          </Content>
        </Layout>
        <Footer>
          <Footers />
        </Footer>
      </Layout>
    </LayoutStyle>
  );
};
export default LayoutContainer;
