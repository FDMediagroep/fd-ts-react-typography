import React, { PureComponent } from "react";
import { createGlobalStyle } from 'styled-components';

export default class H1 extends PureComponent<any, any> {
    render() {
        return (
            <>
                <H1Style/>
                <h1 {...this.props} className={`fd-h1${this.props.className ? ` ${this.props.className}` : ''}`}>{this.props.children}</h1>
            </>
        );
    }
}

export const H1Style = createGlobalStyle`
.fd-h1 {
    margin: 0;
    padding: 0;
    font-family: 'ArnhemProBold', serif;
    line-height: 1.08em;
    width: 88%;
    font-size: 1.6065rem;
    margin: 0;
    @media only screen and (min-width: 641px) {
        font-size: 2.8125rem;
    }
    @media only screen and (min-width: 1025px) {
        font-size: 3.25rem;
    }

    &.article-longread-persoonlijk {
        width: auto;
        font-size: 1.625rem;
        @media only screen and (min-width: 641px) {
            font-size: 3.4375rem;
        }
        @media only screen and (min-width: 1025px) {
            font-size: 4.375rem;
        }
    }

    &.article-longread {
        font-family: 'ConsortWebThin', serif;
        font-weight: normal;
        width: auto;
        font-size: 1.625rem;
        @media only screen and (min-width: 641px) {
            font-size: 3.4375rem;
        }
        @media only screen and (min-width: 1025px) {
            font-size: 4.375rem;
        }
    }

    &.opening-teaser {
        font-size: 1.5625rem;
        @media only screen and (min-width: 641px) {
            font-size: 1.8125rem;
        }
    }
    &.teaser {
        font-size: 1.375rem;
    }
    &.cover-teaser {
        font-size: 1.375rem;
        color: white;
    }
    &.square-teaser {
        font-size: 1.125rem;
        @media only screen and (min-width: 641px) {
            font-size: 1.1875rem;
        }
        @media only screen and (min-width: 1025px) {
            font-size: 1.25rem;
        }
    }
    &.service {
        font-family: 'ProximaNovaBold', Helvetica, Arial, sans-serif;
        color: #49a4a2;
        font-size: 1.875rem;
    }
    &.service-accordion {
        font-family: 'ProximaNovaRegular', Helvetica, Arial, sans-serif;
        font-size: 1rem;
        @media only screen and (min-width: 641px) {
            font-size: 1.0625rem;
        }
        a {
            display: block;
            color: #677381;
            cursor: pointer;
            font-weight: normal;
        }
    }
    &.my-news-aside {
        font-family: 'ProximaNovaBold', sans-serif;
        line-height: 1.2em;
        color: #49a4a2;
        font-size: 1rem;
        @media only screen and (min-width: 641px) {
            font-size: 1.125rem;
        }
    }
}`;
