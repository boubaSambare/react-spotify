import React, { Component } from "react";
import logo from "../../logo.png";
import "./sidebar.css";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Link}  from 'react-router-dom';
import {FiSearch, FiHome} from 'react-icons/fi'
import {GiBookshelf} from 'react-icons/gi'

class SideBar extends Component {
  render() {
    return (
      <>
        <div className="sidebar-container">
          <Navbar className="top-navbar" light expand="md" >
            <Collapse navbar>
              <Nav className="mr-auto" navbar vertical>
                <NavbarBrand href="/">
                  <img src={logo} width="60" height="auto" alt="logo" />
                </NavbarBrand>
                <NavItem>
                  <Link to="/" className="text-white nav-link">
                      <FiHome size="1.3em"/>{' '}
                    Home
                  </Link>
                </NavItem>
                <NavItem>
                  <NavLink href="#" className="text-white">
                      <FiSearch size="1.3em"/>{'  '}
                    search
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" className="text-white">
                      <GiBookshelf size="1.3em"/>{'  '}
                  Your Library
                  </NavLink>
                </NavItem>
               
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </>
    );
  }
}

export default SideBar;
