import { Layout } from "antd";
import React from "react";
import { AppHeader } from "./components/AppHeader";
import { AllRoutes } from "./routes/AllRoutes";
const { Content, Footer } = Layout;
function App() {
  return (
    <React.Fragment>
      <AppHeader />
      <Layout>
        <Content
          className="site-layout"
          style={{ padding: "50px", marginTop: 64 }}
        ></Content>
        <AllRoutes />
        <Footer style={{ textAlign: "center" }}>
          <h3> Expense Tracker App @ React-Redux-TypeScript 2022</h3>
        </Footer>
      </Layout>
    </React.Fragment>
  );
}

export default App;
