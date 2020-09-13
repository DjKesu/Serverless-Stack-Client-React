import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { Nav,NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import './App.css';
import Routes from "./Routes.js";

function App() {
  return (
    <div className="App container">
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Neat Notes</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
          <LinkContainer to="./sign-up.js">
            <NavItem> Sign Up </NavItem>
          </LinkContainer>
          <LinkContainer to="./login.js">
            <NavItem> Login </NavItem>
          </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes/>
    </div>
  );
}

export default App;
