/**
 * The component to be rendered in the Education route.
 * 
 * This component will be rendering information about the
 * users educational experience, graphical and textual, for
 * reference of the degrees and/or educational experiences
 * from the user.
 * 
 * @author Robert Dekovich (dekovich@umich.edu)
 * @date 03 November 2020
 * @file pages/education/index.js
 */

import {useState} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import "@css/education.css";
import "@css/mixins.css";

import {hex2rgba} from '@utils/index.js'

import strings from "@content/strings.json";
import umich from "@images/education/michigan.png";
import mcc from "@images/education/mcc.png";

// CONSTANT: Defined color maps for schools
const colormap = {
    "University of Michigan": {
        primary: "#00274C",
        secondary: "#FFCB05"
    },
    "Macomb Community College": {
        primary: "#065597",
        secondary: "#b3b2af"
    }
}


const Button = ({isActive, onClick, school, id}) => {
    // Acquire the background color and the text color of the button
    const background = isActive ? hex2rgba(colormap[school].secondary, 0.3) : "transparent";
    const textcolor = isActive ? colormap[school].primary : "gray";

    // Acquire the border width of the left border based on if this is the active tab
    const width = isActive ? 4 : 2;

    return (
        <button 
            style={{color: textcolor, 
                    borderLeftColor: textcolor, 
                    borderLeftWidth: width, 
                    backgroundColor: background}}
            className="tab"
            onClick={onClick}
            id={`tab-${id}`}
        >
            <span>{school}</span>
        </button>
    )
}

function Education () {
    // Define state for the Education component
    const [activeTabID, setActiveTabID] = useState(0);

    // Get the correct reference to the image provided in the content tab
    const getLogo = () => {
        // if the user is on the UMICH tab
        if (strings.education[activeTabID].school == "University of Michigan") {
            return umich;
        } else {
            return mcc;
        }
    }

    return (
        <Container fluid className="education">
            <h2 className="preface">Education</h2>
            <Container fluid>
                <Row>
                    <Col lg={4} md={5} sm={12} xs={12}>
                        <tablist aria-label="Education">
                            {strings.education.map((education, i) => {
                                return (
                                    <Button 
                                        isActive={activeTabID == i}
                                        onClick={() => setActiveTabID(i)}
                                        school={education.school}
                                        id={i}
                                    />
                                );
                            })}
                        </tablist>
                    </Col>
                    <Col lg={8} md={7} sm={12} xs={12}>
                        <Container fluid>
                            <Row>
                                <Col lg={2} md={3} sm={3} xs={3} className="justify-content-center align-items-center d-flex m-0">
                                    <Image src={getLogo()} roundedCircle fluid/>
                                </Col>
                                <Col lg={10} md={9} sm={9} xs={9} className="justify-content-center align-items-start d-flex flex-column">
                                    <h4 className="header">
                                        <span>{strings.education[activeTabID].degree}</span>
                                        <span>{" "}</span>
                                        <span>{strings.education[activeTabID].major}</span>
                                        <span style={{color: colormap[strings.education[activeTabID].school].primary}}>
                                            &nbsp;@&nbsp;
                                            <a href={strings.education[activeTabID].url} style={{color: colormap[strings.education[activeTabID].school].primary}}>
                                                {strings.education[activeTabID].school}
                                            </a>
                                        </span>
                                    </h4>
                                    <div className="edu-range">
                                        <span className="location">{strings.education[activeTabID].location}</span>
                                        <span>{" || "}</span>
                                        <span>{strings.education[activeTabID].start}</span>
                                        <span>{" - "}</span>
                                        <span>{strings.education[activeTabID].end}</span>
                                    </div>
                                    <div className="edu-range honors">
                                        <span>{strings.education[activeTabID].honors ? strings.education[activeTabID].honors : ''}</span>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <ul className="fancy-list pt-4">
                                    {strings.education[activeTabID].points.map((point, i) => {
                                        return (
                                            <li className="elt" id={`elt-${i}`}>
                                                {point}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Education;