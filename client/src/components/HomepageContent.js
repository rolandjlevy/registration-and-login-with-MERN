import React from 'react';
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap';

function HomepageContent() {
  return (
    <Jumbotron fluid className="m-5 p-5">
      <Container fluid>
        <Row>
          <Col>
            <h1 className="display-4">Welcome to Wellcrom!</h1>
            <p className="lead">We are Experts in Hand Tools, Power Tools, Cutting Tools and PPE</p>
            <hr className="my-2" />
            <p>Our exclusive brands collection consists of a range of high quality products to help keep your operations running and your people safe.</p>
          </Col>
        </Row>
        <Row>
          <Col sm="6">
            <p className="lead">
              new customers <Button color="warning" outline href="/" target="_blank">Register</Button>
            </p>
          </Col>
          <Col sm="6">
            <p className="lead">
              existing customers <Button color="warning" outline href="/">Login</Button>{' '}
            </p>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}



//  

// Registration for 

export default HomepageContent;