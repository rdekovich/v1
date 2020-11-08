/**
 * A global styles file with variables to apply throughout the website.
 * 
 * This component contains a root style to apply across the website
 * to maintain consistency.
 * 
 * @author Robert Dekovich (dekovich@umich.edu)
 * @date 06 November 2020
 * @ styles/global.js
 * 
 */

 import {createGlobalStyle} from "styled-components";

 const GlobalStyle = createGlobalStyle`
    :root {
        --black: #070707;
        --blue: #546BF9;
        --blue-tint: rgba(84, 107, 249, 0.75);
        --lightest-blue: rgba(84, 107, 249, 0.1);
        --white: #FFFFFF;
        --slate-gray: #708090;
        --slate-gray-tint: rgba(112, 128, 144, 0.75);

        --font-main: Roboto, sans-serif;
        --font-mono: monospace;

        --xxs: 12px;
        --xs: 13px;
        --sm: 14px;
        --md: 16px;
        --lg: 18px;
        --xl: 20px;
        --xxl: 22px;
        --heading: 32px;

        --border-radius: 4px;
        --tab-height: 42px;
        --tab-width-edu: 195px;
        --tab-width-job: 130px;

        --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    .section-header {
        display: flex;
        align-items: center;
        position: relative;
        margin: 10px 0 40px;
        width: 100%;
        font-size: clamp(26px, 5vw, var(--heading));
        white-space: nowrap;
        color: var(--black);

        &:after {
            content: '';
            display: block;
            position: relative;
            top: 0px;
            width: 100%;
            height: 1px;
            margin-left: 20px;
            background-color: var(--black);
        }
    }

    body {
        margin: 0;
        width: 100%;
        min-height: 100%;
        overflow-x: hidden !important;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        background-color: var(--white);
        color: var(--slate-gray);
        font-size: var(--lg);
        font-family: var(--font-main);
        line-height: 1.3;

        @media (max-width: 480px) {
            font-size: var(--lg);
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0 0 10px 0;
        font-weight: 600;
        color: var(--slate-gray);
        line-height: 1.1;
    }

    .big-heading {
        margin: 0;
        font-size: clamp(40px, 8vw, 80px);
    }

    .medium-heading {
        margin: 0;
        font-size: clamp(40px, 8vw, 60px);
    }

    a {
        display: inline-block;
        text-decoration: none;
        text-decoration-skip-ink: auto;
        color: inherit;
        position: relative;
        transition: var(--transition);
        cursor: pointer;

        &:hover,
        &:focus {
            color: var(--blue);
        }

        &.inline-link {
            ${({theme}) => theme.mixins.ilink};
        }
    }

    p {
        margin: 0 0 15px 0;

        &:last-child,
        &:last-of-type {
            margin: 0;
        }

        & > a {
            ${({theme}) => theme.mixins.ilink};
        }

        & > code {
            background-color: var(--black);
            color: var(--white);
            font-size: var(--sm);
            border-radius: var(--border-radius);
            padding: 0.3em 0.5em;
        }
    }

    ul {
        &.fancy-list {
            padding: 0;
            margin: 0;
            list-style: none;
            font-size: var(--lg);
            li {
                position: relative;
                padding-left: 30px;
                margin-bottom: 10px;
                &:before {
                    content: '▹';
                    position: absolute;
                    left: 0;
                    color: var(--blue);
                }
            }
        }
    }

    blockquote {
        border-left-color: var(--blue);
        border-left-style: solid;
        border-left-width: 1px;
        margin-left: 0px;
        margin-right: 0px;
        padding-left: 1.5rem;

        p {
            font-style: italic;
            font-size: 24px;
        }
    }

    hr {
        background-color: var(--white);
        height: 1px;
        border-width: 0px;
        border-style: initial;
        border-color: initial;
        border-image: initial;
        margin: 1rem;
    }

    code {
        font-family: var(--font-mono);
        font-size: var(--md);
    }

    .overline {
        color: var(--blue);
        font-family: var(--font-mono);
        font-size: var(--md);
        font-weight: 400;
    }

    .nav-brand {
        font-weight: 900;
        font-family: var(--font-main);
    }

    .nav-header {
        font-family: var(--font-mono);
        color: var(--black);
        font-size: var(--md);
    }

    .subtitle {
        color: var(--blue);
        margin: 0 0 20px 0;
        font-size: var(--md);
        font-family: var(--font-mono);
        font-weight: 400;
        line-height: 1.5;

        @media (max-width: 1080px) {
            font-size: var(--sm);
        }

        @media (max-width: 768px) {
            font-size: var(--xs);
        }

        a {
            ${({theme}) => theme.mixins.ilink};
            line-height: 1.5;
    }
 `;

 export default GlobalStyle;