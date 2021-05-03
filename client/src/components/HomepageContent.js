import React, { useState } from 'react';
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

import ModalForm from './ModalForm';

function HomepageContent() {

  const [toggleState, setToggleState] = useState(false);

  const handleModalToggle = () => {
    setToggleState(true);
  }

  return (
    <div className="vertical-center">
      <ModalForm toggleState={toggleState} modalTitle="Register as a new user" />
      <Jumbotron fluid className="m-5 p-5 rounded max-width">
        <Container fluid>
          <Row>
            <Col>
              <h1 className="display-4">Welcome to WellCrom!</h1>
              <p className="lead">A supplier of industrial tools, offering an unrivalled choice of products to all industries, professions and trades</p>
              <hr className="my-2" />
              <p>Of all the work we do, we are famous for Safety, Cutting Tools, Hand Tools and Power Tools and Abrasives. We have expertise within our technical teams who can provide audits and offer advice on how your business can improve with the help of these four key categories.</p>
              <p>We are committed to delivering a truly customer focused and cost-effective service that successfully matches your company’s needs. Supplying the largest range available from a single source, including products from Welding and Site Maintenance to Office Supplies and Hygiene and more.</p>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col sm="6">
              <p className="lead">
                New customers <Button color="warning" outline onClick={handleModalToggle}>Register{" "}<FontAwesomeIcon icon={faUser} /></Button>
              </p>
            </Col>
            <Col sm="6">
              <p className="lead">
                Existing customers <Button color="warning" outline href="/">Login{" "}<FontAwesomeIcon icon={faSignInAlt} /></Button>
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default HomepageContent;