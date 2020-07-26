import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Container, Row, Button } from "react-bootstrap";
import Nav from "./Components/Nav/Nav";
import Body from "./Layout/Body";

import { Route } from "react-router";

function App() {
  return (
    <Container fluid>
      <Row>
        <Nav name="test"></Nav>
        <Body></Body>
      </Row>
    </Container>
  );
}

export default App;
