import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId="347916383681-ihj0j3t3jttm1a813mbjii5of488fuqp.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </Provider>
);
