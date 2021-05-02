import React from 'react';
import About from './About.js';
import Contact from './Contact.js';
import Users from './Users.js';
import CreateUser from './CreateUser.js';
import Home from './Home.js'
import logo from './logo.svg';
import './App.css';
import {Navbar,Nav} from 'react-bootstrap'
import { Link, Route, BrowserRouter as Router,Switch } from 'react-router-dom'
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Router>

        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home"><Link to='/home'>FIRST</Link></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home"><Link to='/home'>Home</Link></Nav.Link>
            <Nav.Link href="#home"><Link to='/about'>About</Link></Nav.Link>
            <Nav.Link href="#contact"><Link to='/contact'>Contact Us</Link></Nav.Link>
            <Nav.Link href="#User"><Link to='/Users'>User List</Link></Nav.Link>
            <Nav.Link href="#CreateUser"><Link to='/CreateUser'>Create user</Link></Nav.Link>

          </Nav>
          
        </Navbar>
        <br />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/Users">
            <Users />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/CreateUser">
            <CreateUser />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        {/* <h1>Hello from React</h1> */}
        {/* <About name={name}/> */}
        {/* <Contact /> */}
        {/* <Users /> */}
        {/* <CreateUser /> */}
      </Router>
    </div>
  );
}

export default App;
