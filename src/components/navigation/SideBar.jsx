import React from "react";
import logo from "../../logo.png";
import "./sidebar.css";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Container,
  Row,
  Col
} from "reactstrap";
import { Link } from "react-router-dom";
import { FiSearch, FiHome } from "react-icons/fi";
import { GiBookshelf } from "react-icons/gi";

const SideBar = () => {
    return (
      <>
        <div className="sidebar-container">
          <Container fluid>
            <Row>
              <Col>
                <Navbar className="top-navbar" light expand="md">
                  <Collapse navbar>
                    <Nav className="mr-auto" navbar vertical>
                      <NavbarBrand href="/">
                        <img src={logo} width="80" height="auto" alt="logo" />
                      </NavbarBrand>
                      <NavItem>
                        <Link
                          to="/"
                          className="text-white nav-link border-on-hover"
                        >
                          <FiHome size="1.3em" /> Home
                        </Link>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#" className="text-white border-on-hover">
                          <FiSearch size="1.3em" />
                          {"  "}
                          search
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#" className="text-white border-on-hover">
                          <GiBookshelf size="1.3em" />
                          {"  "}
                          Your Library
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Collapse>
                </Navbar>
              </Col>
            </Row>
            <Row>
              <div className="margin-top">
                <Button
                  outline
                  color="secondary"
                  block
                  className="sidebar-button rounded-pill"
                >
                  SIGN UP
                </Button>
                <Button
                  outline
                  color="secondary"
                  block
                  className="sidebar-button rounded-pill"
                >
                  LOGIN
                </Button>
                <p class="text-white">
                  <span>
                    <a class="text-white" href="#">
                      Cookie
                    </a>
                  </span>{" "}
                  &nbsp;| &nbsp;{" "}
                  <span>
                    <a class="text-white" href="#">
                      {" "}
                      Privacy
                    </a>
                  </span>
                </p>
                <p>
                  {" "}
                  <a class="text-white" href="#">
                    Policy
                  </a>
                </p>
              </div>
            </Row>
          </Container>
        </div>
      </>
    );
  
}

export default SideBar;
