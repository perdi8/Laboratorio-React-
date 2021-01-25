/* eslint-disable prettier/prettier */
import React from "react";
import { LoginComponent } from "./login.component";
import { Login } from "./login.vm";
import { isValidLogin } from "./login.api";
import { useHistory } from "react-router-dom";
import { routesGitHub } from "../../core/router";

export const LoginContainer: React.FunctionComponent = () => {
  const history = useHistory();

  const loginSucceeded = (user: string, isValid: boolean): void => {
    if (isValid) {
      history.push(routesGitHub.dashboard);
    } else {
      // TODO replace
      alert("Invalid login");
    }
  };

  const handleLogin = (login: Login) => {
    isValidLogin(login.user, login.password).then((result) => {
      loginSucceeded(login.user, result);
    });
  };

  return (
    <>
      <LoginComponent onLogin={handleLogin} />
    </>
  );
};
