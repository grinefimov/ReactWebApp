import React, { Component } from 'react';
import { Container, Navbar, NavbarBrand, NavItem, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

interface NavMenuState {
  collapsed: boolean;
}

export class NavMenu extends Component<{}, NavMenuState> {
  constructor(props: any) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3" bg="dark" variant="dark">
          <Container>
            <NavbarBrand><Link className="text-light" to="/">ReactWebApp</Link></NavbarBrand>
            <Navbar.Toggle onClick={this.toggleNavbar} className="mr-2"/>
            <Navbar.Collapse className="d-sm-inline-flex flex-sm-row">
              <ul className="navbar-nav">
                <NavItem>
                  <Link className="text-light mx-2" to="/">Home</Link>
                </NavItem>
                <NavItem>
                  <Link className="text-light mx-2" to="/items">Items</Link>
                </NavItem>
              </ul>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}