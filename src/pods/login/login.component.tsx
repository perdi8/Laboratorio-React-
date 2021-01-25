/* eslint-disable prettier/prettier */
import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

import Button from "@material-ui/core/Button";
import { Login, createEmptyLogin } from "./login.vm";
import { TextField } from "@material-ui/core";

interface Props {
  onLogin: (login: Login) => void;
}

export const LoginComponent: React.FunctionComponent<Props> = (props) => {
  const { onLogin } = props;
  const [login, setLogin] = React.useState<Login>(createEmptyLogin());

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card style={{ width: "400px", marginTop: "40px" }}>
          <CardHeader title="Login" />
          <CardContent>
            <form
              onSubmit={(e) => {
                e.preventDefault, onLogin(login);
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <TextField
                  name="user"
                  label="Name"
                  value={login.user}
                  onChange={(e) => setLogin({ ...login, user: e.target.value })}
                />
                <TextField
                  name="password"
                  label="Password"
                  type="password"
                  value={login.password}
                  onChange={(e) =>
                    setLogin({ ...login, password: e.target.value })
                  }
                />
                <br />
                <Button type="submit" variant="contained" color="primary">
                  Login
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
