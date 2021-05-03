import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faUser, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  NavLink
} from 'reactstrap';

function AppNavBar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="light" light expand="sm" className="mb-5">
        <Container>
          <NavbarBrand href="/" color="ff5100">
            <FontAwesomeIcon icon={faTools} /> Wellcrom
          </NavbarBrand>
          <NavbarToggler onClick={handleToggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">
                  <FontAwesomeIcon icon={faUser} /> Register
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">
                  <FontAwesomeIcon icon={faSignInAlt} /> Login
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default AppNavBar;