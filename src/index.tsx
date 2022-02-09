//global imports
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";
// npm i @types/react-router-dom
//local imports
import rootReducer from "./store";
import App from "./App";
import { Provider } from "react-redux";

//create store here
const store = createStore(rootReducer, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
