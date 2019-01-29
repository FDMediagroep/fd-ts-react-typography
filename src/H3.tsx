import React, { PureComponent } from "react";
import { createGlobalStyle } from "styled-components";

export default class H3 extends PureComponent<any, any> {
    render() {
        return (
            <>
                <H3Style/>
                <h3 {...this.props} className={`fd-h3${this.props.className ? ` ${this.props.className}` : ''}`}>{this.props.children}</h3>
            </>
        );
    }
}

export const H3Style = createGlobalStyle`
.fd-h3 {
    margin: 0;
    padding: 0;
    font-family: 'ProximaNovaBold', sans-serif;
    box-sizing: border-box;
    display: block;
    font-size: 1rem;
    line-height: 1.1em;

    &.article-subheader {
        padding: 0;
        margin: 5rem auto 1.25rem auto;
        line-height: 1.15;
        font-family: 'ArnhemProBlond', serif;
        font-size: 1.875rem;
        @media only screen and (min-width: 1025) {
            font-size: 2.8125rem;
        }
    }
    &.article-longread-subheader {
        max-width: 719px;
        padding-left: 0;
        padding-right: 0;
        margin: 5rem auto 1.25rem auto;
        line-height: 1.15;
        font-family: 'ArnhemProBlond', serif;
        font-size: 1.875rem;
        @media only screen and (min-width: 1025) {
            font-size: 2.8125rem;
        }
    }

    &.article-inline {
        font-size: 1.25rem;
        font-family: 'ProximaNovaBold', sans-serif;
        color: #49a4a2;
        margin-bottom: 1rem;
    }

    &.article-longread-inline {
        font-size: 1.25rem;
        font-family: 'ProximaNovaBold', sans-serif;
        color: #f05031;
        margin-bottom: 1rem;
    }

    &.article-inline-stack-frame {
        font-size: 1.5rem;
        font-family: 'ProximaNovaBold', sans-serif;
        color: #4d494C;
        line-height: 2.025rem;
        margin: 0;
    }

    &.card {
        color: #49a4a2;
        font-family: 'ProximaNovaBold', sans-serif;
        line-height: 1.2em;
        @media only screen and (min-width: 641px) {
            font-size: 1.25rem;
        }
    }
}
`;
