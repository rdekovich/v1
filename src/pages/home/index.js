/**
 * The component to be rendered in the Home route.
 * 
 * This component will contain a prefacing for the
 * portfolio website, and will preview projects or
 * accomplishments as well as aesthetics/text.
 * 
 * @author Robert Dekovich (dekovich@umich.edu)
 * @date 03 November 2020
 * @file pages/home/index.js
 */

 import Container from 'react-bootstrap/Container';
 import Row from 'react-bootstrap/Row';
 import Col from 'react-bootstrap/Col';

 import '@css/home.css';
 import '@css/mixins.css';

 import strings from '@content/strings.json';

 function Home () {
     return (
         <Container fluid className="home">
            <greeting>Hey, my name is</greeting>
            <name>Robert Dekovich.</name>
            <subheader>I make impactful technology.</subheader>
            <intro>
                I'm a software engineer based in Austin, TX specializing in designing
                and building impactful, innovative solutions to hard problems.
            </intro>
            <Row>
                <Col className="home-col" md={3} sm={6} xs={5}>
                    <a href="#" type="button" class="btn btn-primary">Resume</a>
                </Col>
                <Col className="home-col" md={3} sm={6} xs={5}>
                    <a type="button" class="btn btn-secondary" href={`mailto:${strings.email}`}>Contact</a>
                </Col>
            </Row>
         </Container>
     )
 }

 export default Home;