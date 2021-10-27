import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import ReduxStore from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ReduxStore()}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LocalizationProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
