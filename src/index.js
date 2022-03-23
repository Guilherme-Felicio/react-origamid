import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import UserStorage  from "./userContext";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <UserStorage>
        <App />
      </UserStorage>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
