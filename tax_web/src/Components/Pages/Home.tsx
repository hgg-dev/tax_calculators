import React from "react";
import { Container, Jumbotron, Button, Row } from "react-bootstrap";
import { UserContextConsumer } from "../../common/context";

//  {/* Context needs to return a function */}
// https://medium.com/@thehappybug/using-react-context-in-a-typescript-app-c4ef7504c858

export const HomePage = () => {
  interface Name {
    a: string;
    b?: string;
    c?: string;
  }
  var name: Name = {
    a: "David",
    b: "Mary",
    c: "Taylor",
  };

  console.log(name);

  var test: string = "david";

  return (
    <>
      <UserContextConsumer>
        {(context) =>
          context && (
            <div>
              <Container>
                <Row>
                  <Jumbotron>
                    <h1>Hello, {context.name}</h1>
                    <p>
                      This is a simple hero unit {name.a}, a simple
                      jumbotron-style component for calling extra attention to
                      featured content or information.
                    </p>
                    <p>
                      <Button variant="primary">Test </Button>
                    </p>
                  </Jumbotron>
                </Row>
              </Container>
            </div>
          )
        }
      </UserContextConsumer>
    </>
  );
};
