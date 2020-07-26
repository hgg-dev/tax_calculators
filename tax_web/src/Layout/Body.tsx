import React from "react";
import { Container, Jumbotron, Button, Row } from "react-bootstrap";
import { Route, Router } from "react-router";
import HomePage from "../Components/Pages/Home";
import IncomeTaxPage from "../Components/Pages/Income_Tax";
import Switch from "react-bootstrap/esm/Switch";

//  {/* Context needs to return a function */}
// https://medium.com/@thehappybug/using-react-context-in-a-typescript-app-c4ef7504c858
export default function Body() {
  return (
    <>
      <Container>
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <Route exact path="/income-tax" render={() => <IncomeTaxPage />} />
        </Switch>
      </Container>
    </>
  );
}
