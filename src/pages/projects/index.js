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
import styled from 'styled-components';

import {AiFillFolderOpen, AiFillGithub, AiOutlineLink} from 'react-icons/ai';

import strings from "@content/strings.json";
import "@css/projects.css";

const StyledGrid = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        font-size: clamp(24px, 5vw, var(--heading));
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

const StyledProject = styled.div`
    cursor: default;
    transition: var(--transition)

    &:hover,
    &:focus {
        outline: 0;
        .project-inner {
            transform: translateY(-5px);
        }
    }

    .project-inner {
        ${({theme}) => theme.mixins.boxshadow};
        ${({theme}) => theme.mixins.fbetween};
        flex-direction: column;
        align-items: flex-start;
        position: relative;
        height: 100%;
        padding: 2rem 1.75rem;
        border-radius: var(--border-radius);
        background-color: var(--white);
        transition: var(--transition);

        &:hover,
        &:focus {
          box-shadow: 0 20px 30px -15px black;
        }
    }

    .project-top {
        ${({ theme }) => theme.mixins.fbetween};
        margin-bottom: 30px;

        .folder {
            color: var(--blue);
            svg {
                width: 40px;
                height: 40px;
            }
        }

        .project-links {
            margin-right: -10px;
            color: var(--slate-gray-tint);

            a {
                padding: 5px 10px;

                svg {
                    width: 20px;
                    height: 20px;
                }
            }
        }
    }

    .project-title {
        margin: 0 0 10px;
        color: var(--black);
        font-size: var(--xxl);
    }

    .project-description {
        color: var(--slate-gray);
        font-size: 17px;
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
            font-family: var(--font-mono);
            font-size: var(--xxs);
            line-height: 1.75;

            &:not(:last-of-type) {
                margin-right: 15px;
            }
        }
    }
`

function Projects () {
    return (
        <Container fluid className="projects pb-5">
            <h2 className="section-header">📁 Projects</h2>
            <StyledGrid>
                <div className="projects-grid">
                {strings.projects.map((project, i) => {
                    return (
                        <StyledProject>
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
                        </StyledProject>
                    )
                })}
                </div>
            </StyledGrid>
        </Container>
    )
}

export default Projects;