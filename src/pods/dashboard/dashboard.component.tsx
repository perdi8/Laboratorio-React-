/* eslint-disable prettier/prettier */
import { Card, CardContent } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { routesGitHub, routesRick } from "../../core/router";
import { ThemeProviderComponent } from "../../theme/theme.provider.component";

export const DashboardComponent: React.FC = () => {
  return (
    <>
      <ThemeProviderComponent>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "150px",
            gap: "10%",
          }}
        >
          <Card style={{ width: "200px" }}>
            <CardContent>
              <Link to={routesGitHub.memberListGitHub}>
                <img
                  onClick={() => {
                    routesGitHub.memberListGitHub;
                  }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUOIrnP0O2BfuhzhJVW3uZLsov6kMzRF-yAA&usqp=CAU"
                  style={{ width: "160px", height: "200px" }}
                />
              </Link>
            </CardContent>
          </Card>

          <Card style={{ width: "200px" }}>
            <CardContent>
              <Link to={routesRick.memberListRick}>
                <img
                  onClick={() => {
                    routesRick.memberListRick, console.log("yeeepa");
                  }}
                  src="https://img.fireden.net/co/image/1559/22/1559227335823.jpg"
                  style={{ width: "165px" }}
                />
              </Link>
            </CardContent>
          </Card>
        </div>
      </ThemeProviderComponent>
    </>
  );
};
