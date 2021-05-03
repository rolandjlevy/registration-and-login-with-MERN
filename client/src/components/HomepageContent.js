import React from 'react';
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

function HomepageContent(props) {
  const { onToggleRegister, onToggleLogin } = props;
  return (
    <div className="mt-8 mb-5 vertical-center">
      <Jumbotron fluid className="m-3 p-5 rounded max-width-970">
        <Container fluid>
          <Row>
            <Col>
              <h1 className="display-5">Cromwell Tools</h1>
              <p className="lead">A supplier of industrial tools, offering an unrivalled choice of products to all industries, professions and trades</p>
              <hr className="my-2" />
              <p>Of all the work we do, we are famous for Safety, Cutting Tools, Hand Tools and Power Tools and Abrasives. We have expertise within our technical teams who can provide audits and offer advice on how your business can improve with the help of these four key categories.</p>
              <p>We are committed to delivering a truly customer focused and cost-effective service that successfully matches your company’s needs. Supplying the largest range available from a single source, including products from Welding and Site Maintenance to Office Supplies and Hygiene and more.</p>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col sm="6">
              <p className="lead">
                New customer <Button color="warning" outline onClick={onToggleRegister}>Register{" "}<FontAwesomeIcon icon={faUser} /></Button>
              </p>
            </Col>
            <Col sm="6">
              <p className="lead">
                Existing customer <Button color="warning" outline onClick={onToggleLogin}>Login{" "}<FontAwesomeIcon icon={faSignInAlt} /></Button>
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default HomepageContent;