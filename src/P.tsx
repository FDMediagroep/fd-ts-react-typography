import React, { PureComponent } from "react";
import { createGlobalStyle } from "styled-components";

export default class P extends PureComponent<any, any> {
    render() {
        return (
            <>
                <GlobalStyle/>
                <p {...this.props} className={`fd-paragraph${this.props.className ? ` ${this.props.className}` : ''}`}>{this.props.children}</p>
            </>
        );
    }
}

const GlobalStyle = createGlobalStyle`
    .fd-paragraph {
        margin: 0;
        padding: 0;

        &.article {
            font-family: 'ArnhemProBlond', serif;
            line-height: 1.5em;
            margin: 0 0 .5em 0;
            font-size: 1.125rem;
            @media only screen and (min-width: 641px) {
                font-size: 1.1875rem;
            }
            @media only screen and (min-width: 1025px) {
                font-size: 1.3125rem;
            }
            strong {
                font-family: 'ArnhemProBold', serif;
            }
            em {
                font-style: italic;
            }
            a {
                color: #49a4a2;
                cursor: pointer;
            }
        }
        &.article-longread {
            max-width: 719px;
            margin-left: auto;
            margin-right: auto;
            width: auto;
            margin-bottom: 0.625rem;
            font-size: 1.125rem;
            @media only screen and (min-width: 641px) {
                font-size: 1.1875rem;
            }
            @media only screen and (min-width: 1025px) {
                font-size: 1.3125rem;
            }
            font-family: 'ArnhemProBlond', serif;
            strong {
                font-family: 'ArnhemProBold', serif;
            }
            em {
                font-style: italic;
            }
            &:first-of-type::first-letter {
                font-size: 6rem;
                line-height: .8;
                margin: 0 1rem 0 -1rem;
                float: left;
                color: #f05031;
                text-transform: capitalize;
                font-family: 'ProximaNovaRegular', sans-serif;
            }
            a {
                color: #f05031;
                cursor: pointer;
            }
        }

        &.article-intro {
            color: #191919;
            width: 100%;
            margin: 0;
            font-size: 1.375rem;
            @media only screen and (min-width: 641px) {
                font-size: 1.5625rem;
            }
            @media only screen and (min-width: 1025px) {
                font-size: 1.75rem;
                width: 84%;
            }
            line-height: 1.2em;
            font-family: 'ArnhemProBlond', serif;
        }
        &.article-longread-intro {
            color: #8a8176;
            max-width: 719px;
            margin: 0 auto;
            width: auto;
            font-size: 1.125rem;
            @media only screen and (min-width: 641px) {
                font-size: 1.5625rem;
            }
            @media only screen and (min-width: 1025px) {
                font-size: 1.75rem;
            }
            line-height: 1.3em;
            text-align: center;
            font-family: 'ConsortWebBold', serif;
        }

        &.article-summary-p {
            display: inline-block;
            width: 100%;
            font-family: 'ProximaNovaRegular', sans-serif;
            font-size: 1.0625rem;
            line-height: 1.2;
            margin: 0 0 0.9375rem 0;
        }

        &.article-number-frame {
            color: #49a4a2;
            font-family: 'ProximaNovaRegular', sans-serif;
            font-size: 1.0625rem;
            line-height: 1.2;
            margin: 0 0 0.65625rem 0;
        }
        &.article-longread-number-frame {
            color: #f05031;
            font-family: 'ProximaNovaRegular', sans-serif;
            font-size: 1.0625rem;
            line-height: 1.2;
            margin: 0 0 0.65625rem 0;
        }

        &.article-text-frame {
            display: inline-block;
            width: 100%;
            font-size: 1.0625rem;
            font-family: 'ProximaNovaRegular', sans-serif;
            line-height: 1.434375rem;
            margin: 0 0 1.15622rem 0;
        }

        &.article-stack-frame {
            display: inline-block;
            font-size: 1.5rem;
            font-family: 'ProximaNovaBold', sans-serif;
            color: #49a4a2;
            line-height: 2.025rem;
            margin: 0;
        }
        &.article-longread-stack-frame {
            display: inline-block;
            font-size: 1.5rem;
            font-family: 'ProximaNovaBold', sans-serif;
            color: #f05031;
            line-height: 2.025rem;
            margin: 0;
        }

        &.article-link-block {
            color: #49a4a2;
            font-size: 1rem;
            font-family: 'ProximaNovaBold', sans-serif;
            line-height: 1.1em;
            @media only screen and (min-width: 641px) {
                font-size: 1.125rem;
            }
        }
        &.article-longread-link-block {
            color: #f05031;
            font-size: 1rem;
            font-family: 'ProximaNovaBold', sans-serif;
            line-height: 1.1em;
            @media only screen and (min-width: 641px) {
                font-size: 1.125rem;
            }
        }

        &.article-bullet-points {
            margin: 0 0 0.9375rem 0;
            color: #191919;
            font-size: 1.25rem;
            font-family: 'ProximaNovaRegular', sans-serif;
            line-height: 1.2;
        }

    }
`;

export {GlobalStyle as PStyle};
