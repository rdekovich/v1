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
    max-width: 900px;

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
                            <p>
                                Howdy!  I'm Rob, a software engineer based in Austin, TX.
                            </p>
                            <p>
                                Currently, I am an SDE I at{' '}<a href={'https://www.amazon.com/'}>Amazon</a>, working
                                in Information Security.  Our team focuses on resource and permissions governance at a
                                massive scale, which naturally poses many complex and interesting new problems to solve.
                                I have found great satisfaction in designing and implementing solutions to these problems,
                                and learning about so many new technologies along the way.
                            </p>
                            <p>
                                On a more personal note, I maintain many other hobbies and titles outside of software.  I am an
                                avid basketball fan (Pistons), a "wanna be" chef, and a dominant{' '}<a href="https://playvalorant.com/">VALORANT</a> player in the NA servers (not actually).
                            </p>
                            <p>
                                Here are a few technologies I have worked with, and regard myself very proficient in:
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