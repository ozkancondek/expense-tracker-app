//https://documenter.getpostman.com/view/11347698/TzRPiote#c30f0847-8584-42bb-9c1a-b112a7f515f2
////api requests link

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
        <Content className="site-layout" style={{ padding: "50px" }}></Content>
        <div style={{ height: "95vh" }}>
          <AllRoutes />
        </div>

        <Footer style={{ textAlign: "center" }}>
          <h3> Expense Tracker App @ React-Redux-TypeScript 2022</h3>
        </Footer>
      </Layout>
    </React.Fragment>
  );
}

export default App;
