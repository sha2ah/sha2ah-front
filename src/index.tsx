import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "./i18n";

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback="loading">
      <Auth0Provider
        domain="your-auth0-domain-address"
        clientId="your-auth0-clientId"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
