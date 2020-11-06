/**
 * The component to be rendered in the Patents route.
 * 
 * This component will render patents/patent information
 * that the user owns or has pending.  This route is completely
 * optional, as many users do not have patents.  Patents shall be
 * easy to add in a generic way via components.
 * 
 * @author Robert Dekovich (dekovich@umich.edu)
 * @date 03 November 2020
 * @file pages/patents/index.js
 */

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import {AiFillGithub, AiOutlineLink} from 'react-icons/ai';

import styled from 'styled-components';

import "@css/patents.css";
import "@css/mixins.css";

import strings from '@content/strings.json';
import patent01 from "@images/patents/patent01.png"

const Patent = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  &:not(:last-of-type) {
    margin-bottom: 100px;

    @media (max-width: 768px) {
      margin-bottom: 70px;
    }

    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }

  &:nth-of-type(odd) {
    .patent-content {
      grid-column: 7 / -1;
      text-align: right;

      @media (max-width: 1080px) {
        grid-column: 5 / -1;
      }
      @media (max-width: 768px) {
        grid-column: 1 / -1;
        padding: 40px 40px 30px;
      }
      @media (max-width: 480px) {
        padding: 25px 25px 20px;
      }
    }
    .patent-tag-list {
      justify-content: flex-end;

      li {
        margin: 0 0 5px 20px;

        @media (max-width: 768px) {
          margin: 0 0 5px 10px;
        }
      }
    }
    .patent-links {
      justify-content: flex-end;
      margin-left: 0;
      margin-right: -10px;
    }
    .patent-image {
      grid-column: 1 / 8;

      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }
  }

  .patent-content {
    position: relative;
    grid-column: 1 / 7;
    grid-row: 1 / -1;

    @media (max-width: 1080px) {
      grid-column: 1 / 9;
    }

    @media (max-width: 768px) {
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
      z-index: 5;
    }

    @media (max-width: 480px) {
      padding: 30px 25px 20px;
    }
  }

  .patent-overline {
    margin: 10px 0;
    color: #546bf9;
    font-size: 13px;
    font-family: monospace;
    font-weight: 500;
  }

  .patent-title {
    color: slate;
    font-size: clamp(24px, 5vw, 28px);

    @media (min-width: 768px) {
      margin: 0 0 20px;
    }

    @media (max-width: 768px) {
      color: slate;
    }
  }

  .patent-description {
    box-shadow: 0 10px 30px -15px black;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px black;
    }

    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: 4px;
    background-color: white;
    color: black;
    font-size: 16px;
    font-weight: 400;

    @media (max-width: 768px) {
      padding: 20px 0;
      background-color: transparent;
      box-shadow: none;

      &:hover {
        box-shadow: none;
      }
    }

    a {
        color: #546bf9;
    }
  }

  .patent-tag-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0 10px;
    padding: 0;
    list-style: none;

    li {
      margin: 0 20px 5px 0;
      color: slate;
      font-size: 13px;
      font-family: monospace;
      white-space: nowrap;
    }

    @media (max-width: 768px) {
      margin: 10px 0;

      li {
        margin: 0 10px 5px 0;
        color: slate;
      }
    }
  }

  .patent-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    color: slate;
    a {
      padding: 10px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  .patent-image {
    box-shadow: 0 10px 30px -15px;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px black;
    }

    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;
    }

    a {
      width: 100%;
      border-radius: 4px;
      vertical-align: middle;

      &:hover,
      &:focus {
        background: transparent;

        &:before,
        .img {
          background: transparent;
          filter: none;
        }
      }

      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        background-color: gray;
        mix-blend-mode: screen;
      }
    }

    .img {
      border-radius: 4px;
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1) brightness(90%);

      @media (max-width: 768px) {
        object-fit: cover;
        width: auto;
        height: 100%;
        filter: grayscale(100%) contrast(1) brightness(80%);
      }
    }
  }
`;

function Patents () {
    return (
        <Container fluid className="patents mb-5">
            <h2 className="preface"><span role="img" aria-label="patents">📜</span>Patents</h2>
            {strings.patents.map((patent, i) => {
                return (
                    <Patent>
                        <div className="patent-content">
                            <p className="patent-overline">{patent.date}</p>
                            <h3 className="patent-title">{patent.title}</h3>
                            <div className="patent-description">
                                {patent.description}
                            </div>

                            <ul className="patent-tag-list">
                                {patent.tags.map((tag, j) => {
                                    return <li key={j}>{tag}</li>
                                })}
                            </ul>

                            <div className="patent-links">
                                {patent.github !== "" && (
                                <a href={patent.github} aria-label="Github link">
                                    <AiFillGithub />
                                </a>  
                                )}
                                {patent.external !== "" && (
                                    <a href={patent.external} aria-label="External link">
                                        <AiOutlineLink />
                                    </a>
                                )}
                            </div>
                        </div>
                        <div className="patent-image">
                            <a href={patent.external ? patent.external : patent.github ? patent.github : '#'}>
                                <Image src={patent01} fluid className="img"/>
                            </a>
                        </div>
                    </Patent>
                )
            })}
        </Container>
    )
}

export default Patents;