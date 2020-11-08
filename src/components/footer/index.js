/**
 * Floating footer component on bottom of the webpage.
 * 
 * This component will float/persist among all pages in the wrapper
 * container of the webpage, and will display copyright information
 * for style as well.
 * 
 * @author Robert Dekovich (dekovich@umich.edu)
 * @date 03 November 2020
 * @file footer/index.js
 */

import React, {useState, useEffect} from 'react';

import styled from 'styled-components';

import {AiOutlineFork, AiFillStar} from 'react-icons/ai';

import strings from '@content/strings.json';

const StyledFooter = styled.div`
    ${({theme}) => theme.mixins.fcenter}
    flex-direction: column;
    margin-bottom: 30px;

    h1 {
        font-size: var(--md);
        color: var(--black);
        max-width: 300px;
        font-weight: 600;
        font-family: var(--font-mono);
        text-align: center;
    }

    p {
        font-size: var(--xxs);
        color: var(--slate-gray);
        max-width: 300px;
        font-weight: 300;
        font-family: var(--font-mono);
        text-align: center;
        margin-bottom: 20px;
    }

    h2 {
        font-size: var(--sm);
        color: var(--slate-gray);
        max-width: 250px;
        font-weight: 400;
        font-family: var(--font-mono);
    }

    .github-span {
        margin: 5px;
    }
`;

function Footer () {
    // Define state for the GitHub information from the GitHub API
    const [githubInfo, setGithubInfo] = useState({stars: null, forks: null});

    // Component-did-mount functionality to pull the number of forks and stars this project has
    useEffect(() => {
        fetch(strings.githubAPI).then(response => response.json()).then(json => {
            // Unpack the JSON, collect the # of stars and # of forks
            const {stargazers_count, forks_count} = json;
            console.log(stargazers_count)

            // Update the GitHub information for the Footer component
            setGithubInfo({stars: stargazers_count, forks: forks_count});
        }).catch(e => console.error(e));
    }, []);

    // Renders the GitHub information (forks + stars) in the footer
    const renderGithubInfo = () => {
        // If the information has been loaded..
        if (githubInfo.stars !== null && githubInfo.forks !== null) {
            return (
                <a href={strings.github}>
                    <span className="github-span">
                        <AiFillStar size={14} />
                        <span className="github-span">{githubInfo.stars}</span>
                    </span>
                    <span className="github-span">
                        <AiOutlineFork size={14} />
                        <span className="github-span">{githubInfo.forks}</span>
                    </span>
                </a>
            )
        }
    }

    return (
        <footer className="mt-5">
            <StyledFooter>
                <h1>Built with ❤️ by Robert Dekovich</h1>
                <p>Design and inspiration from&nbsp;
                    <a href="https://brittanychiang.com/" className="inline-link">
                        Brittany Chiang
                    </a>
                    &nbsp;and&nbsp;
                    <a href="https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw" className="inline-link">
                        Garrett Love
                    </a>
                    .
                </p>
                <h2>{renderGithubInfo()}</h2>
            </StyledFooter>
        </footer>
    )
}

export default Footer;