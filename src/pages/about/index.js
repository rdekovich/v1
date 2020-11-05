/**
 * The component to be rendered in the About route.
 * 
 * This component will contain general information
 * about the user (textual and graphic).  With this,
 * it also will contain current information, state of
 * development, and what you have been up to.
 * 
 * @author Robert Dekovich (dekovich@umich.edu)
 * @date 03 November 2020
 * @file pages/about/index.js
 */

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import "@css/about.css";
import "@css/mixins.css";

import strings from '@content/strings.json';
import rdekovich from "@images/rdekovich.png";

function About () {
    return (
        <Container fluid className="about">
            <h2 className="preface">About</h2>
            <Row>
                <Col className="about-col" style={{backgroundColor: 'transparent'}} md={5} sm={12} xs={12}>
                    <div>
                        <p>
                            Howdy!  I'm Rob, a software engineer based in wonderful Austin, TX.
                        </p>
                        <p>
                            I enjoy utilizing software to tackle hard problems and challenges we
                            face in the world today, be it micro or macro at scale.  My goal is to
                            always solve human problems pragmatically, with humans in mind.
                        </p>
                        <p>
                            After I graduated from the{' '}<a href={'https://umich.edu/'}>University of Michigan</a> in December 2020,
                            I joined the software engineering team at{' '}<a href={'https://www.gm.com/'}>GM</a>, where I work on a
                            plethora of challenging and interesting problems in the transportation industry.
                        </p>
                        <p>
                            Here are a few of the technologies I work with, and regard myself proficient in:
                        </p>
                    </div>
                    <ul className="skills-list">
                        {strings.skills.map((skill, i) => <li className="elt" key={i}>{skill}</li>)}
                    </ul>
                </Col>
                <Col className="about-col" md={7} sm={12} xs={12}>
                    <div className="picture">
                        <Image src={rdekovich} roundedCircle fluid className="border shadow mt-2"/>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default About;