
import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import HomepageCard from './HomepageCard';

import hereForYou from '../images/still-here-for-you.jpg';
import safetyAtWork from '../images/safety-and-health-at-work.jpg';
import supportingGreen from '../images/supporting-green-industries.jpg';

function HomepageCards() {
  return (
    <Container className="mb-5 p-0 max-width-1000">
    <Row className='m-0 p-0'>
      <Col sm="4" xs="12" className='mb-4'>
        <HomepageCard 
          img={hereForYou} 
          title="Our Exclusive Brands Collection"
          subtitle="We're Still Here For You"
          bodyText="We’re here to help you keep operations running and your people safe. Find all products you need and further information on all five of our product categories."
          link="https://www.cromwell.co.uk/info/return-to-work-the-new-normal" 
        />
      </Col>
      <Col sm="4" xs="12" className='mb-4'>
        <HomepageCard 
          img={supportingGreen} 
          title="Supporting Pioneering Green Industries"
          subtitle="Valuing Renewable Energy"
          bodyText="A clean energy revolution is taking place globally and as the world continues to change, we want to  support pioneering green industries that create our future."
          link="https://www.cromwell.co.uk/info/renewable-energy" 
        />
      </Col>
      <Col sm="4" xs="12" className='mb-4'>
        <HomepageCard 
          img={safetyAtWork} 
          title="COVID-19 advice &amp; best practice"
          subtitle="World Day for Safety &amp; Health"
          bodyText="Our expert guides on returning to the workplace are here to help you ease safely back into your working environment. With information and expert recommendations."
          link="https://www.cromwell.co.uk/info/covid-19-information" 
        />
      </Col>
    </Row>
    </Container>
  );
}

export default HomepageCards;