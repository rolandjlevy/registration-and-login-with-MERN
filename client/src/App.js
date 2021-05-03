
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col, Button } from 'reactstrap';

import AppNavBar from './components/AppNavBar';
import HomepageContent from './components/HomepageContent';
import Users from './components/Users';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faUser, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

import bgImageGrinderSparks from './images/grinder-sparks-bg.jpg';
import safetyAtWork from './images/safety-and-health-at-work.jpg';
import hereForYou from './images/still-here-for-you.jpg';
import supportingGreen from './images/supporting-green-industries.jpg';

function App() {
  return (
    <div className="App" style={{backgroundImage:`url(${bgImageGrinderSparks})`}}>
      <AppNavBar />
      <HomepageContent />
      <Container className="m-5">
        <Row>
          <Col className='p-2' >
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
      
    </div>
  );
}

export default App;