import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import { setPublicPath } from "systemjs-webpack-interop";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { microAppConfig } from "../micro-app-config";

/* This dynamically sets the webpack public path so that code splits work properly. See related:
 * https://github.com/joeldenning/systemjs-webpack-interop#what-is-this
 * https://webpack.js.org/guides/public-path/#on-the-fly
 * https://single-spa.js.org/docs/faq/#code-splits
 */
setPublicPath(microAppConfig.publicName);

const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary() {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
