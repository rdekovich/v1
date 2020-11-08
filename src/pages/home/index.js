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

 import styled from 'styled-components';
 import strings from '@content/strings.json';

 import '@css/home.css';

 // Define a styled component for the Home page
 const StyledHome = styled.div`
    ${({ theme }) => theme.mixins.fcenter};
    flex-direction: column;
    align-items: flex-start;
    min-height: 75vh;
    max-width: 100vw;
    overflow: hidden;

    h1 {
        margin: 20px 0 25px 4px;
        color: var(--blue);
        font-family: var(--font-mono);
        font-size: clamp(var(--sm), 5vw, var(--md));
        font-weight: 400;

        @media (max-width: 480px) {
            margin: 0 0 20px 2px;
        }
    }

    h2 {
        color: var(--black);
        font-size: 52px;
        font-weight: 900;
    }

    h3 {
        margin-top: 10px;
        color: var(--slate-gray);
        font-size: 52px;
        line-height: 0.9;
    }

    .desc {
        margin-top: 20px;
        max-width: 500px;
    }

    .buttons {
        display: flex;
        flex-direction: row;
        min-width: 400px;
        margin-top: 40px;
    }

    .home-button {
        ${({theme}) => theme.mixins.button};
        height: 50px;
        margin: 10px;
        margin-right: 12.5px;
        margin-left: 0px;
    }

    .resume-color {
        background-color: var(--blue);
        &:hover,
        &:focus,
        &:active {
            background-color: var(--blue-tint);
        }
        &:after {
            display: none !important;
        }
    }

    .contact-color {
        background-color: var(--slate-gray);
        &:hover,
        &:focus,
        &:active {
            background-color: var(--slate-gray-tint);
        }
        &:after {
            display: none !important;
        }
    }
 `

 function Home () {
     return (
         <Container fluid className="home">
             <StyledHome>
                <h1>Hey, my name is</h1>
                <h2>Robert Dekovich.</h2>
                <h3>I make impactful technology.</h3>
                <p className="desc">
                    I'm a software engineer based in Austin, TX specializing in designing
                    and building impactful, innovative solutions to hard problems.
                </p>
                <div className="buttons">
                    <a className="home-button resume-color" href={strings.resume}>
                        Resume
                    </a>
                    <a className="home-button contact-color" href={`mailto:${strings.email}`}>
                        Contact me
                    </a>
                </div>
            </StyledHome>
         </Container>
     )
 }

 export default Home;