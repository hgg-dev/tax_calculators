import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import { Button, Container, Grid } from "@material-ui/core";
import Nav from "./Nav/Nav";
import IncomeCal from "./Calculators/IncomeCal/IncomeCal";

export default function App() {
  return (
    <>
      <Grid container direction="column" justify="center" alignItems="center">
        <IncomeCal />
        <Button color="primary">Hello World</Button>
        <Nav />
      </Grid>
    </>
  );
}
