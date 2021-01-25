import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { switchRoutes } from "./routes";
import {
  LoginScene,
  DashboardScene,
  MemberListGitHubScene,
  MemberListRickScene,
  MemberDetailGitHubScene,
  MemberDetailRickScene,
} from "../../scenes";
import { MyContextProvider } from "../../common-app/context/member-list-github-context";

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact={true}
          path={[switchRoutes.root, switchRoutes.login]}
          component={LoginScene}
        />

        <Route
          exact={true}
          path={switchRoutes.dashboard}
          component={DashboardScene}
        />

        <Route
          exact={true}
          path={switchRoutes.memberListRick}
          component={MemberListRickScene}
        />

        <Route
          exact={true}
          path={switchRoutes.memberDetailRick}
          component={MemberDetailRickScene}
        />
        <MyContextProvider>
          <Route
            exact={true}
            path={switchRoutes.memberListGitHub}
            component={MemberListGitHubScene}
          />

          <Route
            exact={true}
            path={switchRoutes.memberDetailGitHub}
            component={MemberDetailGitHubScene}
          />
        </MyContextProvider>
      </Switch>
    </Router>
  );
};
