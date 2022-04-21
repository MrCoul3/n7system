import React, {useEffect} from "react";
import { Layout, Menu } from "antd";
import { useHistory } from "react-router-dom";
import {RouteNames} from "../../routes";

const Sidebar = () => {
  const { SubMenu } = Menu;
  const router = useHistory();

  return (
    <Layout.Sider  className="site-layout-background" width={200}>
      <Menu
        theme="dark"
        mode="inline"
        // defaultSelectedKeys={['0']}
        // defaultOpenKeys={['sub1']}
        style={{ height: "100%" }}
      >
        <SubMenu  key="sub1" title="Components">
            <Menu.Item className={'InfiniteScroll'} key="1" onClick={() => router.push(RouteNames.INFINITE_SCROLL)} >InfiniteScroll</Menu.Item>
        </SubMenu  >
      </Menu>
    </Layout.Sider>
  );
};

export default Sidebar;
