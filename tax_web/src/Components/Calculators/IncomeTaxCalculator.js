import React from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import { render } from "@testing-library/react";

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { income: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ income: event.target.value });
    let tax = this.state.income * 0.1;

    document.getElementById("h1").innerText = tax.toFixed(2);
  }

  handleSubmit(event) {
    // alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Income:
          <input
            type="number"
            value={this.state.income}
            onChange={this.handleChange}
          />
        </label>
        {/* <input type="submit" value="Submit" /> */}
        <h1 id="h1"></h1>
      </form>
    );
  }
}
