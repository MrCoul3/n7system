import React from "react";
import {BrowserRouter, useHistory} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../store";
import AppRouter from "../AppRouter";
import {Breadcrumb, Layout} from "antd";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
export const AppContainer = () => {

    const router = useHistory();
    console.log(router.location.pathname)

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Layout>
          <Sidebar />
          <Layout  style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>List</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
            <Layout.Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <AppRouter />
            </Layout.Content>
          </Layout>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};
