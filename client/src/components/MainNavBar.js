import React, { useState } from 'react';
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

function MainNavBar(props) {
  const { onToggleRegister, onToggleLogin } = props;
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="light" light fixed="top" expand="sm" className="mb-5">
        <Container>
          <NavbarBrand href="/" color="ff5100">
            <FontAwesomeIcon icon={faTools} />{" "}Bromwell
          </NavbarBrand>
          <NavbarToggler onClick={handleToggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={onToggleRegister}>
                  Register{" "}<FontAwesomeIcon icon={faUser} />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={onToggleLogin}>
                  Login{" "}<FontAwesomeIcon icon={faSignInAlt} />
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MainNavBar;