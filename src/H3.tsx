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
    color: #49a4a2;
    box-sizing: border-box;
    display: block;
    font-size: 1rem;
    line-height: 1.1em;

    &.article-subheader {
        max-width: 719px;
        padding-left: 0;
        padding-right: 0;
        margin: 5rem auto 1.25rem auto;
        font-family: 'ArnhemProBlond', serif;
        font-size: 1.875rem;
        @media only screen and (min-width: 1025) {
            font-size: 2.8125rem;
        }
        line-height: 1.15;
    }

    &.card {
        font-family: 'ProximaNovaBold', sans-serif;
        line-height: 1.2em;
        @media only screen and (min-width: 641px) {
            font-size: 1.25rem;
        }
    }
}
`;
