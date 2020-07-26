import React from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";

export default function IncomeTaxCalculator() {
  const income = document.getElementById("income");

  // Calculate = () => {};

  function Calculate() {}

  return (
    <>
      <div>
        <Form>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Income Amount</Form.Label>
            <Form.Control
              id="income"
              type="number"
              placeholder="Please enter your income"
              onClick="Calculate()"
            />
          </Form.Group>
          <h5 id="tax"></h5>
        </Form>
      </div>
    </>
  );
}
