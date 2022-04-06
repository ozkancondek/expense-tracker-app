import { Button } from "antd";
import React from "react";

export const Main = () => {
  return (
    <div
      style={{
        height: "90vh",
        backgroundImage:
          "url(" +
          "  http://cdn2.hubspot.net/hub/125873/file-2642894796-jpg/Expense-Record-Software-QuickBooks-In-Nigeria.jpg" +
          ")",
        backgroundPosition: "center",
        backgroundSize: "cover",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontSize: "1.5rem",
      }}
    >
      {" "}
      <Button type="primary" style={{ height: "50px" }}>
        {" "}
        Explore more
      </Button>
    </div>
  );
};
