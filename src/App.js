/**
 * Root app module for the webpage render.
 * 
 * This component is the entry point to the project, and renders
 * the core base structure of the webpage.  Will maintain a base
 * style in app.css for the App component.
 * 
 * @author Robert Dekovich (dekovich@umich.edu)
 * @date 31 October 2020
 * @file App.js
 */

import {
  BrowserRouter as Router,
  Link,
  Route
} from "react-router-dom";
import Scroll from 'react-scroll';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Footer from '@components/footer';

import Home from '@pages/home';
import About from '@pages/about';
import Experience from '@pages/experience';
import Education from '@pages/education';
import Patents from '@pages/patents';
import Projects from '@pages/projects';
import Contact from '@pages/contact';

import strings from '@static/strings.json';

function App () {
  return (
    <Router>
      <Container className="p-0" fluid>
        <Navbar id="nav" className="border-bottom sticky-top" bg="white" expand="lg">
          <Navbar.Brand style={{fontWeight: 'bold'}}>{strings.title}</Navbar.Brand>
          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" style={{border: 'none', outline: 'none'}}/>
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <a class="nav-link" href={'#' + strings.routes[0].route}>{strings.routes[0].title}</a>
              <a class="nav-link" href={'#' + strings.routes[1].route}>{strings.routes[1].title}</a>
              <a class="nav-link" href={'#' + strings.routes[2].route}>{strings.routes[2].title}</a>
              <a class="nav-link" href={'#' + strings.routes[3].route}>{strings.routes[3].title}</a>
              <a class="nav-link" href={'#' + strings.routes[4].route}>{strings.routes[4].title}</a>
              <a class="nav-link" href={'#' + strings.routes[5].route}>{strings.routes[5].title}</a>
              <a class="nav-link" href={'#' + strings.routes[6].route}>{strings.routes[6].title}</a>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container data-spy="scroll" data-target="#nav" data-offset="0">
          <Row id={strings.routes[0].route}>
            <Home />
          </Row>
          <Row id={strings.routes[1].route}>
            <About />
          </Row>
          <Row id={strings.routes[2].route}>
            <Experience />
          </Row>
          <Row id={strings.routes[3].route}>
            <Education />
          </Row>
          <Row id={strings.routes[4].route}>
            <Patents />
          </Row>
          <Row id={strings.routes[5].route}>
            <Projects />
          </Row>
          <Row id={strings.routes[6].route}>
            <Contact />
          </Row>
        </Container>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
