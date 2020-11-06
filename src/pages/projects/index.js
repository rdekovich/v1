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

import {AiFillFolderOpen, AiFillGithub, AiOutlineLink} from 'react-icons/ai';

import styled from 'styled-components';

import "@css/projects.css";
import "@css/mixins.css";

import strings from "@content/strings.json";

const Grid = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        font-size: clamp(24px, 5vw, 32px);
    }

    .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 15px;
        position: relative;

        @media (max-width: 1080px) {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        }
    }
`

const Project = styled.div`
    cursor: default;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover,
    &:focus {
        outline: 0;
        .project-inner {
            transform: translateY(-5px);
        }
    }

    .project-inner {
        box-shadow: 0 10px 30px -15px black;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        align-items: flex-start;
        position: relative;
        height: 100%;
        padding: 2rem 1.75rem;
        border-radius: 4px;
        background-color: white;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

        &:hover,
        &:focus {
          box-shadow: 0 20px 30px -15px black;
        }
    }

    .project-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;

        .folder {
            color: #546bf9;
            svg {
                width: 40px;
                height: 40px;
            }
        }

        .project-links {
            margin-right: -10px;
            color: #546bf9;

            a {
                padding: 5px 10px;

                svg {
                    width: 20px;
                    height: 20px;
                }
            }
        }

        .project-title {
            margin: 0 0 10px;
            color: black;
            font-size: 22px;
        }

        .project-description {
            color: gray;
        }
    }

    .project-tag-list {
        display: flex;
        align-items: flex-end;
        flex-grow: 1;
        flex-wrap: wrap;
        padding: 0;
        margin: 20px 0 0 0;
        list-style: none;

        li {
            font-family: monospace;
            font-size: 12px;
            line-height: 1.75;

            &:not(:last-of-type) {
                margin-right: 15px;
            }
        }
    }
`

function Projects () {
    return (
        <Container fluid className="projects">
            <h2 className="preface"><span role="img" aria-label="projects">📁</span>Projects</h2>
            <Grid>
                <div className="projects-grid">
                {strings.projects.map((project, i) => {
                    return (
                        <Project>
                            <div className="project-inner">
                                <header>
                                    <div className="project-top">
                                        <div className="folder">
                                            <AiFillFolderOpen />
                                        </div>
                                        <div className="project-links">
                                            {project.github !== "" && (
                                                <a href={project.github} aria-label="Github link">
                                                    <AiFillGithub />
                                                </a>
                                            )}
                                            {project.external !== "" && (
                                                <a href={project.external} aria-label="External link">
                                                    <AiOutlineLink />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    <h3 className="project-title">{project.title}</h3>
                                    <div className="project-description">
                                        {project.description}
                                    </div>
                                </header>
                                <footer>
                                    <ul className="project-tag-list">
                                        {project.tags.map((tag, j) => (<li key={j}>{tag}</li>))}
                                    </ul>
                                </footer>
                            </div>
                        </Project>
                    )
                })}
                </div>
            </Grid>
        </Container>
    )
}

export default Projects;