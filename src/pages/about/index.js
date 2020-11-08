/**
 * The component to be rendered in the About route.
 * 
 * This component will contain general information
 * about the user (textual and graphic).  With this,
 * it also will contain current information, state of
 * development, and what you have been up to.
 * 
 * @author Robert Dekovich (dekovich@umich.edu)
 * @date 03 November 2020
 * @file pages/about/index.js
 */

import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';

import rdekovich from "@images/rdekovich.png";
import strings from "@content/strings.json";
import "@css/about.css";

const StyledAbout = styled.div`
    max-width: 1000px;

    .inner {
        display: grid;
        grid-template-columns: 3fr 2fr;
        grid-gap: 50px;

        @media (max-width: 768px) {
            display: block;
        }
    }
`;

const StyledText = styled.div`
    ul.skills-list {
        display: grid;
        grid-template-columns: repeat(2, minmax(140px, 200px));
        padding: 0;
        margin: 20px 0 0 0;
        overflow: hidden;
        list-style: none;

        li {
            position: relative;
            margin-bottom: 10px;
            padding-left: 20px;
            font-family: var(--font-mono);
            font-size: var(--md);

            &:before {
                content: '▹';
                position: absolute;
                left: 0;
                color: var(--blue);
                font-size: var(--md);
            }
        }
   }
`;

const StyledImage = styled.div`
   position: relative;
   max-width: 300px;

   @media (max-width: 768px) {
       margin: 50px auto 50px;
       width: 70%;
   }

   .shad {
        ${({theme}) => theme.mixins.boxshadow};
   }

   .wrapper {
       position: relative;
       width: 100%;
       borderRadius: 10000px;
       background: transparent;

       &:hover,
       &:focus {
           background: transparent;
           outline: 0;

           &:after {
               top: 15px;
               left: 15px;
           }

           .img {
               filter: none;
               mix-blend-mode: normal;
           }
       }

       .img {
           position: relative;
           border-radius: 10000px;
           mix-blend-mode: multiply:
           transition: var(--transition);
       }

       &:before,
       &:after {
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 10000px;
            transition: var(--transition);
       }

       &:before {
            top: 0;
            left: 0;
            mix-blend-mode: screen;
      }

       &:after {
            border: 2px solid var(--blue);
            background-color: var(--blue);
            top: 20px;
            left: 20px;
            z-index: -1;
      }
   }
`

function About () {
    return (
        <Container fluid className="about">
            <h2 className="section-header">✌ About</h2>
            <StyledAbout>
                <div className="inner">
                    <StyledText>
                        <div>
                            <p>Howdy!  I'm Rob, a software engineer based in Austin, TX.</p>
                            <p>
                                I enjoy building software that truly enhances people's lives.  I have
                                made mobile apps, websites, tools, embedded firmware and much more!  I am
                                super robust in terms of what I can do with a computer.  My goal is to
                                leave a positive impact on this world through the use of software and technology!
                            </p>
                            <p>
                                After I graduated from{' '}<a href={'https://umich.edu/'}>Michigan</a> in December 2020,
                                I joined the software engineering team at{' '}<a href={'https://www.gm.com/'}>GM</a>, where I work on a
                                plethora of challenging and interesting problems in the transportation industry.
                            </p>
                            <p>
                                Here are a few of the technologies I work with, and regard myself proficient in:
                            </p>
                        </div>
                        <ul className="skills-list">
                            {strings.skills.map((skill, i) => {
                                return <li key={i}>{skill}</li>
                            })}
                        </ul>
                    </StyledText>
                    <StyledImage>
                        <div className="wrapper">
                            <Image src={rdekovich} roundedCircle fluid className="shad"/>
                        </div>
                    </StyledImage>
                </div>
            </StyledAbout>
        </Container>
    )
}

export default About;