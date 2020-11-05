/**
 * The component to be rendered in the Patents route.
 * 
 * This component will render patents/patent information
 * that the user owns or has pending.  This route is completely
 * optional, as many users do not have patents.  Patents shall be
 * easy to add in a generic way via components.
 * 
 * @author Robert Dekovich (dekovich@umich.edu)
 * @date 03 November 2020
 * @file pages/patents/index.js
 */

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "@css/patents.css";

function Patents () {
    return (
        <Container fluid className="patents">

        </Container>
    )
}

export default Patents;