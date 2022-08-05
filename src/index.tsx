import rootStore from "modules";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
const rootDom = document.getElementById("root");
if (!rootDom) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootDom);

root.render(
  <Provider store={rootStore}>
    <App />
  </Provider>
);
