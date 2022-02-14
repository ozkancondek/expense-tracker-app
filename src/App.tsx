import { Layout, Menu, Breadcrumb } from "antd";
import { useNavigate } from "react-router-dom";
import { AllRoutes } from "./routes/AllRoutes";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <>
      <InnerContent />
    </>
  );
}

function InnerContent() {
  const navigate = useNavigate();
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item onClick={() => navigate("/login")} key="1">
            login
          </Menu.Item>
          <Menu.Item onClick={() => navigate("/register")} key="2">
            register
          </Menu.Item>
          <Menu.Item onClick={() => navigate("/categories")} key="3">
            categories
          </Menu.Item>
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
      </Content>
      <AllRoutes />
      <Footer style={{ textAlign: "center" }}>
        Expense Tracker App @ React-Redux-TypeScript 2022
      </Footer>
    </Layout>
  );
}

export default App;
