import React, { Component } from "react";
import './MainNav.css'
import { Nav, NavItem, NavLink } from "reactstrap";

class MainNav extends Component {
  render() {
    return (
      <div>
        <Nav className="nav-center">
          <NavItem>
            <NavLink href="#" className="text-white bottom-border">TENDING</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" className="text-white bottom-border">PODCAST</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" className="text-white bottom-border">MOODS AND GENRES</NavLink>
          </NavItem>
          <NavItem>
            <NavLink  href="#" className="text-white bottom-border">
            NEW RELEASES
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" className="text-white bottom-border">DISCOVER</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default MainNav;
