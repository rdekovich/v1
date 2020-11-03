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
import Container from 'react-bootstrap/Container';
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
        <Navbar className="border-bottom" bg="transparent" expand="lg">
          <Navbar.Brand>{strings.title}</Navbar.Brand>
          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link className="nav-link" to={strings.routes[0].route}>{strings.routes[0].title}</Link>
              <Link className="nav-link" to={strings.routes[1].route}>{strings.routes[1].title}</Link>
              <Link className="nav-link" to={strings.routes[2].route}>{strings.routes[2].title}</Link>
              <Link className="nav-link" to={strings.routes[3].route}>{strings.routes[3].title}</Link>
              <Link className="nav-link" to={strings.routes[4].route}>{strings.routes[4].title}</Link>
              <Link className="nav-link" to={strings.routes[5].route}>{strings.routes[5].title}</Link>
              <Link className="nav-link" to={strings.routes[6].route}>{strings.routes[6].title}</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Route path={strings.routes[0].route} exact render={() => <Home />}/>
        <Route path={strings.routes[1].route} render={() => <About />}/>
        <Route path={strings.routes[2].route} render={() => <Experience />}/>
        <Route path={strings.routes[3].route} render={() => <Education />}/>
        <Route path={strings.routes[4].route} render={() => <Patents />}/>
        <Route path={strings.routes[5].route} render={() => <Projects />}/>
        <Route path={strings.routes[6].route} render={() => <Contact />}/>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
