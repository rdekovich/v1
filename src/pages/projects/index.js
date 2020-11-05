/**
 * The component to be rendered in the Projects route.
 * 
 * This component will render relevant projects the user
 * has been a part of or has completed.  This may be a little
 * less generic, but likely will be rendered in a way that makes
 * sense -- like routing you to a Github page or what not.
 * 
 * @author Robert Dekovich (dekovich@umich.edu)
 * @date 03 November 2020
 * @file pages/projects/index.js
 */

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "@css/projects.css";
import "@css/mixins.css";

function Projects () {
    return (
        <Container fluid className="projects">
            <h2 className="preface">Projects</h2>
        </Container>
    )
}

export default Projects;