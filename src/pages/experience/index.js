/**
 * The component to be rendered in the Experience route.
 * 
 * This component will contain information about the job
 * related experience of the user.  The component aims to be
 * able to add jobs easily and seamlessly with job component(s).
 * 
 * @author Robert Dekovich (dekovich@umich.edu)
 * @date 03 November 2020
 * @file pages/experience/index.js
 */

import {useState, useRef} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {KEY_CODES, hex2rgba} from '@utils/index.js';

import "@css/experience.css";
import "@css/mixins.css";

import strings from '@content/strings.json';

const Button = ({isActive, onClick, company, id}) => {
    // Define the color for the button given the active status
    const color = isActive ? '#546bf9' : 'gray';
    const width = isActive ? 4 : 2;

    return (
        <button 
            style={{color: color, 
                    borderLeftColor: color, 
                    borderLeftWidth: width, 
                    backgroundColor: isActive ? hex2rgba(color, 0.125) : 'transparent'}}
            className="tab"
            onClick={onClick}
            id={`tab-${id}`}
        >
            <span>{company}</span>
        </button>
    )
}

function Experience () {
    // Define state for the Experience component
    const [activeTabID, setActiveTabID] = useState(0);
    const [tabFocus, setTabFocus] = useState(null);
    const tabs = useRef([]);

    // Action to focus a tab (for arrow/key progression only)
    const focusTab = () => {
        if (tabs.current[tabFocus]) {
          tabs.current[tabFocus].focus();
          return;
        }

        // If we're at the end, go to the start
        if (tabFocus >= tabs.current.length) {
          setTabFocus(0);
        }

        // If we're at the start, move to the end
        if (tabFocus < 0) {
          setTabFocus(tabs.current.length - 1);
        }
    };

    // Focus on tabs when using up & down arrow keys
    const onKeyDown = e => {
        if (e.key === KEY_CODES.ARROW_UP || e.key === KEY_CODES.ARROW_DOWN) {
            e.preventDefault();

            // Move up
            if (e.key === KEY_CODES.ARROW_UP) {
                setTabFocus(tabFocus - 1);
            }

            // Move down
            if (e.key === KEY_CODES.ARROW_DOWN) {
                setTabFocus(tabFocus + 1);
            }
        }
    };

    return (
        <Container fluid className="experience">
            <h2 className="preface">Experience</h2>
            <Container fluid>
                <Row className="experience-container">
                    <Col lg={5} md={6} sm={12} xs={12}>
                        <tablist aria-label="Jobs" onKeyDown={onKeyDown}>
                            {strings.jobs.map((job, i) => {
                                return (
                                    <Button 
                                        isActive={activeTabID == i}
                                        onClick={() => setActiveTabID(i)}
                                        company={job.company}
                                        id={i}
                                    />
                                )
                            })}
                        </tablist>
                    </Col>
                    <Col className="content" lg={7} md={6} sm={12} xs={12}>
                        <h4 className="header">
                            <span>{strings.jobs[activeTabID].title}</span>
                            <span className="company">
                                &nbsp;@&nbsp;
                                <a href={strings.jobs[activeTabID].url}>
                                    {strings.jobs[activeTabID].company}
                                </a>
                            </span>
                        </h4>
                        <div className="range">
                            <span>{strings.jobs[activeTabID].start}</span>
                            <span>{" - "}</span>
                            <span>{strings.jobs[activeTabID].end}</span>
                        </div>
                        <ul className="fancy-list">
                            {strings.jobs[activeTabID].tasks.map((task, i) => {
                                return (
                                    <li className="elt" id={`elt-${i}`}>
                                        {task}
                                    </li>
                                )
                            })}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Experience;