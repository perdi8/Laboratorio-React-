import React from "react";
import { hot } from "react-hot-loader/root";
import { RouterComponent } from "./core/router";
import { MyContextProvider } from "./common-app/context/member-list-github-context";

const App: React.FunctionComponent = () => {
  return (
    <>
      <RouterComponent />
    </>
  );
};

export default hot(App);
