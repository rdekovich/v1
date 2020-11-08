/**
 * The component to be rendered in the Contact route.
 * 
 * This component will contain contact information about
 * the user, and means of contacting them.
 * 
 * @author Robert Dekovich (dekovich@umich.edu)
 * @date 03 November 2020
 * @file pages/contact/index.js
 */

import Container from 'react-bootstrap/Container';
import {AiOutlineTwitter, AiFillMail, AiOutlineGithub, AiFillLinkedin} from "react-icons/ai";
import styled from "styled-components";

import strings from "@content/strings.json";
import "@css/contact.css";

const Social = styled.div`
    max-width: 700px;
    margin: 0 auto 100px;
    text-align: center;

    @media (max-width: 768px) {
        margin: 0 auto 50px;
    }

    h1 {
        font-size: clamp(40px, 5vw, 60px);
        color: var(--black);
        margin-bottom: 20px;
    }

    p {
        max-width: 500px;
    }

    .social {
        margin-top: 30px;

        a {
            margin: 10px;
        }
    }
`

function Contact () {
    return (
        <Container fluid className="contact">
            <Social>
                <h1>Wanna chat?</h1>
                <p>
                    Feel free to say what's up👋!  My inbox is always open.  I am totally
                    interested in new and cool opportunities, as well as talking to other
                    people interested in tech.
                </p>
                <div className="social">
                    <span>
                        <a href={strings.twitter}>
                            <AiOutlineTwitter color={"#1DA1F2"} size={30}/>
                        </a>
                    </span>
                    <span>
                        <a href={`mailto:${strings.email}`}>
                            <AiFillMail color={"#db3236"} size={30}/>
                        </a>
                    </span>
                    <span>
                        <a href={strings.githubUser}>
                            <AiOutlineGithub color={"#24292e"} size={30}/>
                        </a>
                    </span>
                    <span>
                        <a href={strings.linkedin}>
                            <AiFillLinkedin color={"#2867B2"} size={30}/>
                        </a>
                    </span>
                </div>
            </Social>
        </Container>
    )
}

export default Contact;