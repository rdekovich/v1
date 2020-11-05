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

 import Container from 'react-bootstrap/Container';
 import Row from 'react-bootstrap/Row';
 import Col from 'react-bootstrap/Col';

 import {AiOutlineFork, AiFillStar} from 'react-icons/ai';

 import strings from '@content/strings.json';
 import '@css/footer.css';

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
                <a href={strings.github} target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}>
                    <div>
                        <span className="github-span">
                            <AiFillStar size={14} />
                            <span className="github-span">{githubInfo.stars}</span>
                        </span>
                        <span className="github-span">
                            <AiOutlineFork size={14} />
                            <span className="github-span">{githubInfo.forks}</span>
                        </span>
                    </div>
                </a>
            )
        }
    }

    return (
        <footer className="mt-5">
            <Container fluid>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0 d-flex justify-content-start align-items-center" md={3} sm={6} xs={4}>
                        {renderGithubInfo()}
                    </Col>
                    <Col className="p-0 d-flex justify-content-end align-items-center" md={9} sm={6} xs={8} style={{fontSize: 14}}>
                        {strings.copyright}
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;