import { createGlobalStyle } from "styled-components";

type FigCaptionTypes = 'article-figcaption-inline' | 'article-figcaption-longread-inline';

type HeadingTypes = 'page-h'
| 'article-h'
| 'article-h-longread'
| 'article-h-longread-persoonlijk'
| 'opening-teaser-h'
| 'teaser-h'
| 'cover-teaser-h'
| 'square-teaser-h'
| 'service-h'
| 'service-accordion-h'
| 'my-news-aside-h'
| 'article-h-inline-number-frame'
| 'article-h-longread-inline-number-frame'
| 'article-h-subheader'
| 'article-h-subheader2'
| 'article-h-longread-subheader2'
| 'article-h-inline'
| 'article-h-longread-inline'
| 'article-h-inline-stack-frame'
| 'article-h-inline-link-block'
| 'card-h'
;

type ParagraphTypes = 'article-p'
| 'article-p-longread'
| 'article-p-longread-persoonlijk'
| 'article-p-intro'
| 'article-p-longread-intro'
| 'article-p-summary'
| 'article-p-number-frame'
| 'article-p-longread-number-frame'
| 'article-p-text-frame'
| 'article-p-longread-text-frame'
| 'article-p-longread-persoonlijk-text-frame'
| 'article-p-stack-frame'
| 'article-p-longread-stack-frame'
| 'article-p-link-block'
| 'article-p-longread-link-block'
| 'article-p-bullet-points'
;

export type AllTypes = FigCaptionTypes | HeadingTypes | ParagraphTypes;

type TextStyle = {
    [P in AllTypes]?: any
};

export const figcaptionStyles: TextStyle = {
    'article-figcaption-inline': createGlobalStyle`
    .fd-typography.article-figcaption-inline {
        color: #4c4c4c;
        text-align: left;
        padding: 0.375rem 0;
        font-family: 'ProximaNovaRegular', sans-serif;
        line-height: 1.2em;
        font-size: 0.8125rem;
        @media only screen and (min-width: 641px) {
            font-size: 0.875rem;
        }
        .photographer {
            margin-left: 5px;
            color: #677381;
        }
    }`,
    'article-figcaption-longread-inline': createGlobalStyle`
    .fd-typography.article-figcaption-longread-inline {
        color: rgba(0,0,0,0.5);
        text-align: left;
        padding: 0.375rem 0;
        font-family: 'ProximaNovaRegular', sans-serif;
        line-height: 1.2em;
        font-size: 0.8125rem;
        @media only screen and (min-width: 641px) {
            font-size: 0.875rem;
        }
        .photographer {
            margin-left: 5px;
            color: rgba(0,0,0,0.5);
        }
    }`
};

export const headingStyles: TextStyle = {
    'page-h': createGlobalStyle`
    &.page-h {
        margin: 0;
        padding: 0;
        font-family: 'ArnhemProBold', serif;
        line-height: 1.08em;
        font-size: 1.6065rem;
        @media only screen and (min-width: 641px) {
            font-size: 2.8125rem;
        }
        @media only screen and (min-width: 1025px) {
            font-size: 3.25rem;
        }
    }`,
    'article-h': createGlobalStyle`
    &.article-h {
        margin: 0;
        padding: 0;
        font-family: 'ArnhemProBold', serif;
        line-height: 1.08em;
        width: 88%;
        font-size: 1.6065rem;
        @media only screen and (min-width: 641px) {
            font-size: 2.8125rem;
        }
        @media only screen and (min-width: 1025px) {
            font-size: 3.25rem;
        }
    }`,
    'article-h-longread': createGlobalStyle`
    &.article-h-longread {
        font-family: 'ConsortWebThin', serif;
        font-weight: normal;
        font-size: 1.625rem;
        margin: 15px 0 30px 0;
        text-align: center;
        @media only screen and (min-width: 641px) {
            font-size: 3.4375rem;
        }
        @media only screen and (min-width: 1025px) {
            font-size: 4.375rem;
        }
    }`,
    'article-h-longread-persoonlijk': createGlobalStyle`
    &.article-h-longread-persoonlijk {
        margin: 0;
        padding: 0;
        font-family: 'ArnhemProBold', serif;
        line-height: 1.08em;
        font-size: 1.625rem;
        @media only screen and (min-width: 641px) {
            font-size: 3.4375rem;
        }
        @media only screen and (min-width: 1025px) {
            font-size: 4.375rem;
        }
    }`,
    'opening-teaser-h': createGlobalStyle`
    &.opening-teaser-h {
        margin: 0;
        padding: 0;
        font-family: 'ArnhemProBold', serif;
        line-height: 1.08em;
        font-size: 1.5625rem;
        @media only screen and (min-width: 641px) {
            font-size: 1.8125rem;
        }
    }`,
    'teaser-h': createGlobalStyle`
    &.teaser-h {
        margin: 0;
        padding: 0;
        font-family: 'ArnhemProBold', serif;
        line-height: 1.08em;
        font-size: 1.375rem;
    }`,
    'cover-teaser-h': createGlobalStyle`
    &.cover-teaser-h {
        margin: 0;
        padding: 0;
        font-family: 'ArnhemProBold', serif;
        line-height: 1.08em;
        font-size: 1.375rem;
        color: white;
    }`,
    'square-teaser-h': createGlobalStyle`
    &.square-teaser-h {
        margin: 0;
        padding: 0;
        font-family: 'ArnhemProBold', serif;
        line-height: 1.08em;
        font-size: 1.125rem;
        @media only screen and (min-width: 641px) {
            font-size: 1.1875rem;
        }
        @media only screen and (min-width: 1025px) {
            font-size: 1.25rem;
        }
    }`,
    'service-h': createGlobalStyle`
    &.service-h {
        margin: 0;
        padding: 0;
        font-family: 'ArnhemProBold', serif;
        line-height: 1.08em;
        font-family: 'ProximaNovaBold', Helvetica, Arial, sans-serif;
        color: #49a4a2;
        font-size: 1.875rem;
    }`,
    'service-accordion-h': createGlobalStyle`
    &.service-accordion-h {
        margin: 0;
        padding: 0;
        font-family: 'ArnhemProBold', serif;
        line-height: 1.08em;
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
    }`,
    'my-news-aside-h': createGlobalStyle`
    &.my-news-aside-h {
        margin: 0;
        padding: 0;
        font-family: 'ProximaNovaBold', sans-serif;
        line-height: 1.2em;
        color: #49a4a2;
        font-size: 1rem;
        @media only screen and (min-width: 641px) {
            font-size: 1.125rem;
        }
    }`,
    'article-h-subheader': createGlobalStyle`
    .fd-typography.article-h-subheader {
        margin: 0;
        padding: 0;
        max-width: 719px;
        padding-left: 0;
        padding-right: 0;
        margin: 2.25rem auto 0 auto;
        font-size: 1.375rem;
        font-family: 'ArnhemProBold', serif;
    }`,
    'article-h-inline-number-frame': createGlobalStyle`
    .fd-typography.article-h-inline-number-frame {
        margin: 0;
        padding: 0;
        font-weight: 400;
        color: #49a4a2;
        font-size: 3.125rem;
        font-family: 'ConsortWebRegular', serif;
        line-height: 1em;
    }`,
    'article-h-longread-inline-number-frame': createGlobalStyle`
    .fd-typography.article-h-longread-inline-number-frame {
        margin: 0;
        padding: 0;
        font-weight: 400;
        color: #f05031;
        font-size: 3.125rem;
        font-family: 'ConsortWebRegular', serif;
        line-height: 1em;
    }`,
    'article-h-inline-link-block': createGlobalStyle`
    .fd-typography.article-h-inline-link-block {
        margin: 0;
        padding: 0;
        color: #191919;
        font-size: 1.0625rem;
        font-family: 'ProximaNovaRegular', sans-serif;
        line-height: 1.2em;
    }`,
    'article-h-subheader2': createGlobalStyle`
    .fd-typography.article-h-subheader2 {
        margin: 0;
        padding: 0;
        font-family: 'ProximaNovaBold', sans-serif;
        box-sizing: border-box;
        display: block;
        font-size: 1rem;
        line-height: 1.1em;
        padding: 0;
        margin: 5rem auto 1.25rem auto;
        line-height: 1.15;
        font-family: 'ArnhemProBlond', serif;
        font-size: 1.875rem;
        @media only screen and (min-width: 1025) {
            font-size: 2.8125rem;
        }
    }`,
    'article-h-longread-subheader2': createGlobalStyle`
    .fd-typography.article-h-longread-subheader2 {
        margin: 0;
        padding: 0;
        font-family: 'ProximaNovaBold', sans-serif;
        box-sizing: border-box;
        display: block;
        font-size: 1rem;
        line-height: 1.1em;
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
    }`,
    'article-h-inline': createGlobalStyle`
    .fd-typography.article-h-inline {
        margin: 0;
        padding: 0;
        font-family: 'ProximaNovaBold', sans-serif;
        box-sizing: border-box;
        display: block;
        font-size: 1rem;
        line-height: 1.1em;
        font-size: 1.25rem;
        font-family: 'ProximaNovaBold', sans-serif;
        color: #49a4a2;
        margin-bottom: 1rem;
    }`,
    'article-h-longread-inline': createGlobalStyle`
    .fd-typography.article-h-longread-inline {
        margin: 0;
        padding: 0;
        font-family: 'ProximaNovaBold', sans-serif;
        box-sizing: border-box;
        display: block;
        font-size: 1rem;
        line-height: 1.1em;
        font-size: 1.25rem;
        font-family: 'ProximaNovaBold', sans-serif;
        color: #f05031;
        margin-bottom: 1rem;
    }`,
    'article-h-inline-stack-frame': createGlobalStyle`
    .fd-typography.article-h-inline-stack-frame {
        margin: 0;
        padding: 0;
        font-family: 'ProximaNovaBold', sans-serif;
        box-sizing: border-box;
        display: block;
        font-size: 1rem;
        line-height: 1.1em;
        font-size: 1.5rem;
        font-family: 'ProximaNovaBold', sans-serif;
        color: #4d494C;
        line-height: 2.025rem;
        margin: 0;
    }`,
    'card-h': createGlobalStyle`
    .fd-typography.card-h {
        margin: 0;
        padding: 0;
        font-family: 'ProximaNovaBold', sans-serif;
        box-sizing: border-box;
        display: block;
        font-size: 1rem;
        line-height: 1.1em;
        color: #49a4a2;
        font-family: 'ProximaNovaBold', sans-serif;
        line-height: 1.2em;
        @media only screen and (min-width: 641px) {
            font-size: 1.25rem;
        }
    }`,
};

export const paragraphStyles: TextStyle = {
    'article-p':  createGlobalStyle`
    .fd-typography.article-p {
        margin: 0;
        padding: 0;
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
            text-decoration: none;
        }
    }
    `,
    'article-p-longread':  createGlobalStyle`
    .fd-typography.article-p-longread {
        margin: 0;
        padding: 0;
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
            text-decoration: none;
        }
    }`,
    'article-p-longread-persoonlijk':  createGlobalStyle`
    .fd-typography.article-p-longread-persoonlijk {
        margin: 0;
        padding: 0;
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
            color: #e57e30;
            text-transform: capitalize;
            font-family: 'ProximaNovaRegular', sans-serif;
        }
        a {
            color: #e57e30;
            cursor: pointer;
            text-decoration: none;
        }
    }`,
    'article-p-intro': createGlobalStyle`
    .fd-typography.article-p-intro {
        margin: 0;
        padding: 0;
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
    }`,
    'article-p-longread-intro': createGlobalStyle`
    .fd-typography.article-p-longread-intro {
        margin: 0;
        padding: 0;
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
    }`,
    'article-p-summary': createGlobalStyle`
    .fd-typography.article-p-summary {
        margin: 0;
        padding: 0;
        display: inline-block;
        width: 100%;
        font-family: 'ProximaNovaRegular', sans-serif;
        font-size: 1.0625rem;
        line-height: 1.2;
        margin: 0 0 0.9375rem 0;
    }`,
    'article-p-number-frame': createGlobalStyle`
    .fd-typography.article-p-number-frame {
        margin: 0;
        padding: 0;
        color: #49a4a2;
        font-family: 'ProximaNovaRegular', sans-serif;
        font-size: 1.0625rem;
        line-height: 1.2;
        margin: 0 0 0.65625rem 0;
    }`,
    'article-p-longread-number-frame': createGlobalStyle`
    .fd-typography.article-p-longread-number-frame {
        margin: 0;
        padding: 0;
        color: #f05031;
        font-family: 'ProximaNovaRegular', sans-serif;
        font-size: 1.0625rem;
        line-height: 1.2;
        margin: 0 0 0.65625rem 0;
    }`,
    'article-p-text-frame': createGlobalStyle`
    .fd-typography.article-p-text-frame {
        margin: 0;
        padding: 0;
        display: inline-block;
        width: 100%;
        font-size: 1.0625rem;
        font-family: 'ProximaNovaRegular', sans-serif;
        line-height: 1.434375rem;
        margin: 0 0 1.15622rem 0;
        &:first-of-type::first-letter {
            text-transform: capitalize;
            font-size: 4.75em;
            line-height: 0.75em;
            color: #49a4a2;
            float: left;
            margin: 3px 5px 0 0;
        }
    }`,
    'article-p-longread-text-frame': createGlobalStyle`
    .fd-typography.article-p-longread-text-frame {
        margin: 0;
        padding: 0;
        display: inline-block;
        width: 100%;
        font-size: 1.0625rem;
        font-family: 'ProximaNovaRegular', sans-serif;
        line-height: 1.434375rem;
        margin: 0 0 1.15622rem 0;
        &:first-of-type::first-letter {
            text-transform: capitalize;
            font-size: 4.75em;
            line-height: 0.75em;
            color: #f05031;
            float: left;
            margin: 3px 5px 0 0;
        }
    }`,
    'article-p-longread-persoonlijk-text-frame': createGlobalStyle`
    .fd-typography.article-p-longread-persoonlijk-text-frame {
        margin: 0;
        padding: 0;
        display: inline-block;
        width: 100%;
        font-size: 1.0625rem;
        font-family: 'ProximaNovaRegular', sans-serif;
        line-height: 1.434375rem;
        margin: 0 0 1.15622rem 0;
        &:first-of-type::first-letter {
            text-transform: capitalize;
            font-size: 4.75em;
            line-height: 0.75em;
            color: #e57e30;
            float: left;
            margin: 3px 5px 0 0;
        }
    }`,
    'article-p-stack-frame': createGlobalStyle`
    .fd-typography.article-p-stack-frame {
        margin: 0;
        padding: 0;
        display: inline-block;
        font-size: 1.5rem;
        font-family: 'ProximaNovaBold', sans-serif;
        color: #49a4a2;
        line-height: 2.025rem;
        margin: 0;
    }`,
    'article-p-longread-stack-frame': createGlobalStyle`
    .fd-typography.article-p-longread-stack-frame {
        margin: 0;
        padding: 0;
        display: inline-block;
        font-size: 1.5rem;
        font-family: 'ProximaNovaBold', sans-serif;
        color: #f05031;
        line-height: 2.025rem;
        margin: 0;
    }`,
    'article-p-link-block': createGlobalStyle`
    .fd-typography.article-p-link-block {
        margin: 0;
        padding: 0;
        color: #49a4a2;
        font-size: 1rem;
        font-family: 'ProximaNovaBold', sans-serif;
        line-height: 1.1em;
        @media only screen and (min-width: 641px) {
            font-size: 1.125rem;
        }
    }`,
    'article-p-longread-link-block': createGlobalStyle`
    .fd-typography.article-p-longread-link-block {
        margin: 0;
        padding: 0;
        color: #f05031;
        font-size: 1rem;
        font-family: 'ProximaNovaBold', sans-serif;
        line-height: 1.1em;
        @media only screen and (min-width: 641px) {
            font-size: 1.125rem;
        }
    }`,
    'article-p-bullet-points': createGlobalStyle`
    .fd-typography.article-p-bullet-points {
        margin: 0;
        padding: 0;
        margin: 0 0 0.9375rem 0;
        color: #191919;
        font-size: 1.25rem;
        font-family: 'ProximaNovaRegular', sans-serif;
        line-height: 1.2;
    }`
};

export const textStyles = {...figcaptionStyles, ...headingStyles, ...paragraphStyles};
