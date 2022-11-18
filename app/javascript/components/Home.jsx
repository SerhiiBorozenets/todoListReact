import { Layout } from "antd";
import React from "react";
// import Projects from "./Projects";
import Header from "./Header";

const { Content, Footer } = Layout;

export default () => (
  <Layout className="layout">
    <Header />
    <Content style={{ padding: "0 50px" }}>
      <div className="site-layout-content" style={{ margin: "100px auto" }}>
        <h1>Project Catalog</h1>
        {/*<Projects />*/}
      </div>
    </Content>
    <Footer style={{ textAlign: "center" }}>SerhiiBorozenets ©2022.</Footer>
  </Layout>
);