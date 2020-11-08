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

import {BrowserRouter as Router} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from "react-scroll";

import Home from '@pages/home';
import About from '@pages/about';
import Experience from '@pages/experience';
import Education from '@pages/education';
import Patents from '@pages/patents';
import Projects from '@pages/projects';
import Contact from '@pages/contact';

import strings from '@content/strings.json';
import Footer from '@components/footer';
import {ThemeProvider} from 'styled-components';
import {GlobalStyle, theme} from "@styles/index.js";

function App () {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container className="p-0">
          <Navbar id="nav" className="border-bottom sticky-top" bg="white" expand="lg">
            <Navbar.Brand className="nav-brand">{strings.title}</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" style={{border: 'none', outline: 'none'}}/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500}>
                  <a class="nav-link nav-header" href={'#' + strings.routes[0].route}>{strings.routes[0].title}</a>
                </Link>
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>
                  <a class="nav-link nav-header" href={'#' + strings.routes[1].route}>{strings.routes[1].title}</a>
                </Link>
                <Link activeClass="active" to="experience" spy={true} smooth={true} offset={-70} duration={500}>
                  <a class="nav-link nav-header" href={'#' + strings.routes[2].route}>{strings.routes[2].title}</a>
                </Link>
                <Link activeClass="active" to="education" spy={true} smooth={true} offset={-70} duration={500}>
                  <a class="nav-link nav-header" href={'#' + strings.routes[3].route}>{strings.routes[3].title}</a>
                </Link>
                <Link activeClass="active" to="patents" spy={true} smooth={true} offset={-70} duration={500}>
                  <a class="nav-link nav-header" href={'#' + strings.routes[4].route}>{strings.routes[4].title}</a>
                </Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500}>
                  <a class="nav-link nav-header" href={'#' + strings.routes[5].route}>{strings.routes[5].title}</a>
                </Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                  <a class="nav-link nav-header" href={'#' + strings.routes[6].route}>{strings.routes[6].title}</a>
                </Link>
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
      </ThemeProvider>
    </Router>
  );
}

export default App;
