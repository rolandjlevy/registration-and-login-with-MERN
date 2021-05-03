
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Users from './Users';

import safetyAtWork from '../images/safety-and-health-at-work.jpg';
import hereForYou from '../images/still-here-for-you.jpg';
import supportingGreen from '../images/supporting-green-industries.jpg';

function HomepageThumbnails() {
  return (
    <Container className="p-5 max-width">
    <Row>
      <Col className='p-2'>
        <a href="https://www.cromwell.co.uk/info/return-to-work-the-new-normal">
          <img src={hereForYou} className="img-thumbnail border-0" />
        </a>
      </Col>
      <Col className='p-2'>
        <a href="https://www.cromwell.co.uk/info/renewable-energy">
          <img src={safetyAtWork} className="img-thumbnail border-0" />
        </a>
      </Col>
      <Col className='p-2'>
        <a href="https://www.cromwell.co.uk/info/covid-19-information">
          <img src={supportingGreen} className="img-thumbnail border-0" />
        </a>
      </Col>
    </Row>
    </Container>
  );
}

export default HomepageThumbnails;