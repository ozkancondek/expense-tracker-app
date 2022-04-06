import React from "react";

export const About = () => {
  return (
    <div
      style={{
        height: "90vh",
        backgroundImage:
          "url(" +
          "https://www.travelperk.com/wp-content/uploads/Guides_Travel-and-Expense-management.png" +
          ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontSize: "1.5rem",
      }}
    >
      <h1>Expense Tracker App</h1>
      <h4> Created with react, typescript, redux and ant-design</h4>
      <h4>Project created to better understanding of redux with typescript</h4>
      <h4>
        User can login to account, add expenses, manage expenses with categories
      </h4>
      <h4>
        Go to{" "}
        <a
          href="https://github.com/ozkancondek/expense-tracker-app"
          target="_blank"
        >
          link here
        </a>
        to see Github
      </h4>
    </div>
  );
};
