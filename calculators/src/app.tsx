import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import "./Calculators/IncomeCal/IncomeCalStyle.scss";
import { Button, Container, Grid } from "@material-ui/core";
import Nav from "./Nav/Nav";
import IncomeCal from "./Calculators/IncomeCal/IncomeCal";

export default function App() {
  return (
    <>
      <Nav />
      <div className={"container-body"}>
        <Grid container direction="column" justify="center" alignItems="center">
          <IncomeCal />
        </Grid>
      </div>
    </>
  );
}
