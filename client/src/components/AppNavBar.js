import React, { useState, Fragment } from "react";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from "reactstrap";
import RegisterModal from './auth/RegisterModal'
import Logout from './auth/Logout'

const AppNavBar = ({ auth }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const { isAuthenticated, user } = auth;

  const authContent = (
    <Fragment>
      <NavItem>
        <span className="navbar-text mr-5">
          <strong>{user ? `Welcome ${user.name}` : ""}</strong>
        </span>
      </NavItem>
      <NavItem>
        <Logout />
      </NavItem>
    </Fragment>
  );

  const guestContent = (
    <Fragment>
      <NavItem><RegisterModal /></NavItem>
    </Fragment>
  );

  return (
    <Fragment>
      <Navbar color="light" dark expand="sm" className="mb-5 custom-navbar">
        <Container>
          <NavbarBrand href="/">KEEP</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {isAuthenticated ? authContent : guestContent}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

AppNavBar.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(AppNavBar);
