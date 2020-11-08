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

import {useState} from 'react';

import Container from 'react-bootstrap/Container';
import styled from "styled-components";

import strings from '@content/strings.json';
import "@css/experience.css";

 const StyledExperience = styled.div`
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
    border-left: 2px solid ${({isActive}) => (isActive ? 'var(--blue)' : 'var(--slate-gray-tint)')};
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
        padding: 0 15px;
        border-left: 0;
        border-bottom: 2px solid ${({isActive}) => (isActive ? 'var(--blue)' : 'var(--slate-gray-tint)')};
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

        .company {
            color: var(--blue);
        }
    }

    .top {
        display: flex;
        flex-direction: row;
    }

    .image-container {
        ${({theme}) => theme.mixins.fcenter};
        max-width: 50px;
        max-height: 50px;
    }

    .image {
        margin-right: 20px;
    }

    .bottom {
        display: block;
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

function Experience () {
    // Define state for the Experience component
    const [activeTabID, setActiveTabID] = useState(0);

    return (
        <Container fluid className="experience">
            <h2 className="section-header">💻 Experience</h2>
            <StyledExperience>
                <div className="inner">
                    <StyledTabs role="tablist" aria-label="Experiences">
                        {strings.jobs.map((job, i) => {
                            return (
                                <li key={i}>
                                    <StyledTabButton 
                                        isActive={activeTabID === i}
                                        onClick={() => setActiveTabID(i)}
                                        id={`job-${i}`}
                                        role={"tab"}
                                        aria-selected={activeTabID === i ? true : false}
                                    >
                                        <span>{job.company}</span>
                                    </StyledTabButton>
                                </li>
                            )
                        })}
                    </StyledTabs>
                    <StyledContent role="tabpanel">
                            <h3>
                                <span>{strings.jobs[activeTabID].title}</span>
                                <span className="company">
                                    &nbsp;@&nbsp;
                                    <a href={strings.jobs[activeTabID].url}>
                                        {strings.jobs[activeTabID].company}
                                    </a>
                                </span>
                            </h3>
                            <p>
                                <span className="location">{strings.jobs[activeTabID].location}</span>
                                <span className="location">&nbsp;{'\u2022'}&nbsp;</span>
                                <span className="range">{strings.jobs[activeTabID].start}</span>
                                <span className="range">&nbsp;-&nbsp;</span>
                                <span className="range">{strings.jobs[activeTabID].end}</span>
                            </p>
                            <ul className="fancy-list mt-3">
                                {strings.jobs[activeTabID].tasks.map((task, j) => {
                                    return (
                                        <li>
                                            {task}
                                        </li>
                                    )
                                })}
                            </ul>
                    </StyledContent>
                </div>
            </StyledExperience>
        </Container>
    )
}

export default Experience;