// The publicName is being used to comunicate with the larus-root. Change the registration
const publicName = "larus/gaivota-react-frontend-larus-registration";

// The microAppFileName is the js file name that webpack are going to create
const microAppFileName = "larus-microappname";

// Here we need to put all packages that are handled by larus-root. This will tell webpack to not include this libs in the build.
const externalPackages = [
  "single-spa",
  "react",
  "react-dom",
  // "@gaivota-frontend/gaivota-ui",
  "react-router-dom",
  "history",
  "react-hook-form",
  // "axios",
  "styled-components",
  // "yup",
  "react-redux",
  //"redux-saga",
  "@reduxjs/toolkit",
  new RegExp(`^${publicName}/`),
];

exports.microAppConfig = { publicName, externalPackages, microAppFileName };
