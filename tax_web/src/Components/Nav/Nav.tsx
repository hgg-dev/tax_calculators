import React from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";

export default function NavHeader(props: { name: string }): any {
  return (
    <>
      <style type="text/css">
        {`
    .navbar {
     width:100%
    }
    }
    `}
      </style>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Tax Calculator</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/income-tax">Income Tax</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </>
  );
}
