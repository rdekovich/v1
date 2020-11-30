/**
 * A mixins JS file to use in the global styling schema.
 * 
 * @author Robert Dekovich (dekovich@umich.edu)
 * @date 06 November 2020
 * @ styles/mixins.js
 * 
 */

 import {css} from "styled-components";

 const mixins = {
     fcenter: css`
        display: flex;
        justify-content: center;
        align-items: center;
     `,
     fbetween: css`
        display: flex;
        justify-content: space-between;
        align-items: center;
     `,
     link: css`
        display: inline-block;
        text-decoration: none;
        text-decoration-skip-ink: auto;
        color: inherit;
        position: relative;
        transition: var(--transition);
        cursor: pointer;
        &:hover,
        &:active,
        &:focus {
            color: var(--blue);
            outline: 0;
        }
     `,
     ilink: css`
        display: inline-block;
        text-decoration: none;
        text-decoration-skip-ink: auto;
        position: relative;
        transition: var(--transition);
        cursor: pointer;
        color: var(--blue);
        &:hover,
        &:focus,
        &:active {
            color: var(--blue);
            outline: 0;
            &:after {
                width: 100%;
            }
            & > * {
                color: var(--blue) !important;
                transition: var(--transition);
            }
        }
        &:after {
            content: '';
            display: block;
            width: 0;
            height: 1px;
            position: relative;
            bottom: 0.2em;
            background-color: var(--blue);
            transition: var(--transition);
            opacity: 0.5;
        }
     `,
     boxshadow: css`
        box-shadow: 0 10px 30px -15px var(--black);
        transition: var(--transition);

        &:hover,
        &:focus {
            box-shadow: 0 20px 30px -15px var(--black);
        }
     `,
     slist: css`
        padding: 0;
        margin: 0;
        list-style: none;
        font-size: var(--fz-lg);

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
     `,
     button: css`
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--blue);
        color: var(--white);
        border-radius: var(--border-radius);
        padding: 1.25rem 1.75rem;
        font-size: var(--sm);
        font-family: var(--font-mono);
        text-decoration: none;
        cursor: pointer;
        transition: var(--transition);
     `
 }

 export default mixins;