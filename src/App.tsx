import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import { Layout, Menu, Breadcrumb } from "antd";
import Login from "./components/Login";

const { Header, Content, Footer } = Layout;

const privateComponent = {
  categories: <Login />,
};

function App() {
  const renderPrivate = (path: keyof typeof privateComponent) => {
    const token = localStorage.getItem("token");
    if (token) {
      return <Route path={path} element={privateComponent[path]} />;
    }
    return <Navigate to="/" />;
  };
  const token = false;
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "50px", marginTop: 64 }}
      >
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Routes>
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          {renderPrivate("categories")}
        </Routes>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Expense Tracker App @ React-Redux-TypeScript 2022
      </Footer>
    </Layout>
  );
}

export default App;
