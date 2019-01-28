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
        &.article-longread {
            max-width: 719px;
            margin-left: auto;
            margin-right: auto;
            width: auto;
            font-size: 1.125rem;
            @media only screen and (min-width: 641px) {
                font-size: 1.1875rem;
            }
            @media only screen and (min-width: 1025px) {
                font-size: 1.3125rem;
            }
            font-family: 'ArnhemProBlond', serif;
            &:first-of-type::first-letter {
                font-size: 6rem;
                line-height: .8;
                margin: 0 1rem 0 -1rem;
                float: left;
                color: #f05031;
                text-transform: capitalize;
                font-family: 'ProximaNovaRegular', sans-serif;
            }
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
        }

        &.article-longread-cyferkader {
            color: #f05031;
            font-family: 'ProximaNovaRegular', sans-serif;
            font-size: 1.0625rem;
            line-height: 1.2;
        }

    }
`;

export {GlobalStyle as PStyle};
