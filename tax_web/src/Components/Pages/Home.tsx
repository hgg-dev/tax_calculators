import React from "react";
import { Container, Jumbotron, Button, Row } from "react-bootstrap";
import { UserContextConsumer } from "../../common/context";

//  {/* Context needs to return a function */}
// https://medium.com/@thehappybug/using-react-context-in-a-typescript-app-c4ef7504c858
export default function HomePage() {
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
                      This is a simple hero unit, a simple jumbotron-style
                      component for calling extra attention to featured content
                      or information.
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
}
