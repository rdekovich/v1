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
import styled from "styled-components";

import strings from '@content/strings.json';
import "@css/education.css";

 const StyledEducation = styled.section`
    max-width: 800px;

    .inner {
        display: flex;

        @media (max-width: 600px) {
            display: block;
        }
    }
 `;

 const StyledTabs = styled.ul`
    position: relative;
    z-index: 3;
    width: max-content;
    padding: 0;
    margin: 0;
    list-style: none;

    @media (max-width: 600px) {
        display: flex;
        overflow-x: auto;
        width: calc(100% + 100px);
        margin-left: -50px;
        margin-bottom: 30px;
    }

    @media (max-width: 480px) {
        width: calc(100% + 50px);
        margin-left: -25px;
    }

    li {
        &:first-of-type {
            @media (max-width: 600px) {
                margin-left: 50px;
            }

            @media (max-width: 480px) {
                margin-left: 25px;
            }
        }
        &:last-of-type {
            @media (max-width: 600px) {
                padding-right: 50px;
            }

            @media (max-width: 480px) {
                padding-right: 25px;
            }
        }
    }
 `;

 const StyledTabButton = styled.button`
    ${({theme}) => theme.mixins.link};
    display: flex;
    align-items: center;
    width: 100%;
    height: var(--tab-height);
    padding: 0 20px 2px;
    border: none;
    border-left: 2px solid var(--slate-gray-tint);
    background-color: transparent;
    color: ${({isActive}) => (isActive ? 'var(--blue)' : 'var(--slate-gray)')};
    font-family: var(--font-mono);
    font-size: var(--xs);
    font-weight: 900;
    text-align: left;
    white-space: nowrap;

    @media (max-width: 768px) {
        padding: 0 15px 2px;
    }

    @media (max-width: 600px) {
        ${({theme}) => theme.mixins.fcenter};
        min-width: 120px;
        width: var(--tab-width);
        padding: 0 15px;
        border-left: 0;
        border-bottom: 2px solid var(--slate-gray-tint);
        text-align: center;
    }

    &:hover,
    &:focus {
        background-color: var(--lightest-blue);
    }
 `;

 const StyledHighlight = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 2px;
    height: var(--tab-height);
    border-radius: var(--border-radius);
    background: var(--blue);
    transform: translateY(calc(${({ activeTabID }) => activeTabID} * var(--tab-height)));
    transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition-delay: 0.1s;

    @media (max-width: 600px) {
        top: auto;
        bottom: 0;
        width: 100%;
        max-width: var(--tab-width);
        height: 2px;
        margin-left: 50px;
        transform: translateX(calc(${({ activeTabID }) => activeTabID} * var(--tab-width)));
    }

    @media (max-width: 480px) {
        margin-left: 25px;
    }
 `;

 const StyledContent = styled.div`
    width: 100%;
    height: auto;
    padding-top: 5px;
    padding-left: 30px;

    @media (max-width: 768px) {
        padding-left: 20px;
        margin-left: 10px;
    }

    @media (max-width: 600px) {
        padding-left: 0;
    }

    ul {
        ${({theme}) => theme.mixins.flist};
    }

    h3 {
        margin-bottom: 5px;
        font-size: var(--xxl);
        font-weight: 500;
        color: var(--black);

        .school {
            color: var(--blue);
        }
    }

    .location {
        font-size: var(--xs);
        color: var(--black);
        font-family: var(--font-mono);
        font-weight: 800;
    }

    .range {
        margin-bottom: 30px;
        color: var(--slate-gray);
        font-family: var(--font-mono);
        font-size: var(--xs);
    }
 `;

function Education () {
    // Define state for the Education component
    const [activeTabID, setActiveTabID] = useState(0);

    return (
        <Container fluid className="education">
            <h2 className="section-header">🎓 Education</h2>
            <StyledEducation>
                <div className="inner">
                    <StyledTabs role="tablist" aria-label="Education">
                        {strings.education.map((school, i) => {
                            return (
                                <li key={i}>
                                    <StyledTabButton 
                                        isActive={activeTabID === i}
                                        onClick={() => setActiveTabID(i)}
                                        id={`education-${i}`}
                                        role={"tab"}
                                        aria-selected={activeTabID === i ? true : false}
                                    >
                                        <span>{school.school}</span>
                                    </StyledTabButton>
                                    <StyledHighlight activeTabID={activeTabID}/>
                                </li>
                            )
                        })}
                    </StyledTabs>
                    <StyledContent role="tabpanel">
                            <h3>
                                <span>{strings.education[activeTabID].degree}</span>
                                <span>&nbsp;</span>
                                <span>{strings.education[activeTabID].major}</span>
                                <span className="school">
                                    &nbsp;@&nbsp;
                                    <a href={strings.education[activeTabID].url}>
                                        {strings.education[activeTabID].school}
                                    </a>
                                </span>
                            </h3>
                            <p>
                                <span className="location">{strings.education[activeTabID].location}</span>
                                <span className="location">&nbsp;{'\u2022'}&nbsp;</span>
                                <span className="range">{strings.education[activeTabID].start}</span>
                                <span className="range">&nbsp;-&nbsp;</span>
                                <span className="range">{strings.education[activeTabID].end}</span>
                            </p>
                            <ul className="fancy-list mt-3">
                                {strings.education[activeTabID].points.map((point, j) => {
                                    return (
                                        <li>
                                            {point}
                                        </li>
                                    )
                                })}
                            </ul>
                    </StyledContent>
                </div>
            </StyledEducation>
        </Container>
    )
}

export default Education;