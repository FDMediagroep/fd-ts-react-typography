import { css } from "styled-components";

type FigCaptionTypes = 'article-inline-figcaption' | 'article-longread-inline-figcaption';

type HeadingTypes = 'page-h'
| 'article-h'
| 'article-h-longread'
| 'article-h-longread-persoonlijk'
| 'breaking-teaser-h'
| 'opening-teaser-h'
| 'teaser-h'
| 'search-teaser-h'
| 'cover-teaser-h'
| 'square-teaser-h'
| 'service-h'
| 'service-accordion-h'
| 'my-news-aside-h'
| 'article-h-inline-number-frame'
| 'article-h-longread-inline-number-frame'
| 'article-h-persoonlijk-inline-number-frame'
| 'article-h-subheader'
| 'article-h-longread-subheader'
| 'article-h-subheader2'
| 'article-h-longread-subheader2'
| 'article-h-inline'
| 'article-h-longread-inline'
| 'article-h-persoonlijk-inline'
| 'article-h-inline-stack-frame'
| 'article-h-inline-link-block'
| 'card-h'
| 'card-h-longread'
| 'card-h-persoonlijk'
;

type ParagraphTypes = 'article-p'
| 'article-p-persoonlijk'
| 'article-p-longread'
| 'article-p-longread-persoonlijk'
| 'article-p-intro'
| 'article-p-longread-intro'
| 'article-p-inline-summary'
| 'article-p-inline-number-frame'
| 'article-p-longread-inline-number-frame'
| 'article-p-persoonlijk-inline-number-frame'
| 'article-p-inline-text-frame'
| 'article-p-longread-inline-text-frame'
| 'article-p-persoonlijk-inline-text-frame'
| 'article-p-inline-stack-frame'
| 'article-p-longread-inline-stack-frame'
| 'article-p-persoonlijk-inline-stack-frame'
| 'article-p-inline-link-block'
| 'article-p-longread-inline-link-block'
| 'article-p-persoonlijk-inline-link-block'
| 'article-p-inline-bullet-points'
;

type QuoteTypes = 'article-inline-quote' | 'article-longread-inline-quote' | 'article-persoonlijk-inline-quote';

export type AllTypes = FigCaptionTypes | HeadingTypes | ParagraphTypes | QuoteTypes;

type TextStyle = {
    [P in AllTypes]?: any
};

export const figcaptionStyles: TextStyle = {
    'article-inline-figcaption': css`
    .fd-typography.article-inline-figcaption {
        color: #4c4c4c;
        text-align: left;
        padding: 0.375rem 0;
        font-family: 'ProximaNovaRegular', sans-serif;
        line-height: 1.2em;
        font-weight: normal;
        font-size: 0.8125rem;
        @media only screen and (min-width: 641px) {
            font-size: 0.875rem;
        }
        .photographer {
            margin-left: 5px;
            color: #677381;
        }
    }`,
    'article-longread-inline-figcaption': css`
    .fd-typography.article-longread-inline-figcaption {
        color: rgba(0,0,0,0.5);
        text-align: left;
        padding: 0.375rem 0;
        font-family: 'ProximaNovaRegular', sans-serif;
        line-height: 1.2em;
        font-weight: normal;
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
    'page-h': css`
    .fd-typography.page-h {
        margin: 0;
        padding: 0;
        font-family: 'ArnhemProBold', serif;
        line-height: 1.08em;
        font-weight: normal;
        font-size: 1.6065rem;
        @media only screen and (min-width: 641px) {
            font-size: 2.8125rem;
        }
        @media only screen and (min-width: 1025px) {
            font-size: 3.25rem;
        }
    }`,
    'article-h': css`
    .fd-typography.article-h {
        margin: 0;
        padding: 0;
        font-family: 'ArnhemProBold', serif;
        line-height: 1.08em;
        width: 88%;
        font-weight: normal;
        font-size: 1.6065rem;
        @media only screen and (min-width: 641px) {
            font-size: 2.8125rem;
        }
        @media only screen and (min-width: 1025px) {
            font-size: 3.25rem;
        }
    }`,
    'article-h-longread': css`
    .fd-typography.article-h-longread {
        font-family: 'ConsortWebThin', serif;
        font-weight: normal;
        margin: 1rem 0;
        text-align: center;
        font-size: 2rem;
        @media only screen and (min-width: 641px) {
            font-size: 3.4375rem;
            margin: 1rem 0 2rem 0;
        }
        @media only screen and (min-width: 1025px) {
            font-size: 4.375rem;
        }
    }`,
    'article-h-longread-persoonlijk': css`
    .fd-typography.article-h-longread-persoonlijk {
        margin: 15px 0 30px 0;
        padding: 0;
        font-family: 'ArnhemProBold', serif;
        line-height: 1.08em;
        font-weight: normal;
        text-align: center;
        font-size: 1.625rem;
        @media only screen and (min-width: 641px) {
            font-size: 3.4375rem;
        }
        @media only screen and (min-width: 1025px) {
            font-size: 4.375rem;
        }
    }`,
    'breaking-teaser-h': css`
    .fd-typography.breaking-teaser-h {
        margin: 0;
        padding: 0;
        font-family: 'ArnhemProBold', serif;
        line-height: 1.08em;
        font-weight: normal;
        font-size: 1.875rem;
        @media only screen and (min-width: 641px) {
            font-size: 2.8125rem;
        }
        @media only screen and (min-width: 1025px) {
            font-size: 3.25rem;
        }
    }`,
    'opening-teaser-h': css`
    .fd-typography.opening-teaser-h {
        margin: 0;
        padding: 0;
        font-family: 'ArnhemProBold', serif;
        line-height: 1.08em;
        font-weight: normal;
        font-size: 1.5625rem;
        @media only screen and (min-width: 641px) {
            font-size: 1.8125rem;
        }
    }`,
    'teaser-h': css`
    .fd-typography.teaser-h {
        margin: 0;
        padding: 0;
        font-family: 'ArnhemProBold', serif;
        line-height: 1.08em;
        font-weight: normal;
        font-size: 1.375rem;
    }`,
    'search-teaser-h': css`
    .fd-typography.search-teaser-h {
        margin: 0;
        padding: 0;
        font-family: 'ArnhemProBold', serif;
        line-height: 1.5em;
        font-weight: normal;
        font-size: 1.5rem;
    }`,
    'cover-teaser-h': css`
    .fd-typography.cover-teaser-h {
        margin: 0;
        padding: 0;
        font-family: 'ArnhemProBold', serif;
        line-height: 1.08em;
        font-weight: normal;
        font-size: 1.375rem;
        color: white;
    }`,
    'square-teaser-h': css`
    .fd-typography.square-teaser-h {
        margin: 0;
        padding: 0;
        font-family: 'ArnhemProBold', serif;
        line-height: 1.08em;
        font-weight: normal;
        font-size: 1.375rem;
        @media only screen and (min-width: 861px) {
            font-size: 1.25rem;
        }
    }`,
    'service-h': css`
    .fd-typography.service-h {
        margin: 0;
        padding: 0;
        font-family: 'ArnhemProBold', serif;
        line-height: 1.08em;
        font-family: 'ProximaNovaBold', Helvetica, Arial, sans-serif;
        color: #49a4a2;
        font-weight: normal;
        font-size: 1.875rem;
    }`,
    'service-accordion-h': css`
    .fd-typography.service-accordion-h {
        margin: 0;
        padding: 0;
        font-family: 'ArnhemProBold', serif;
        line-height: 1.08em;
        font-family: 'ProximaNovaRegular', Helvetica, Arial, sans-serif;
        font-weight: normal;
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
    'my-news-aside-h': css`
    .fd-typography.my-news-aside-h {
        margin: 0;
        padding: 0;
        font-family: 'ProximaNovaBold', sans-serif;
        line-height: 1.2em;
        color: #49a4a2;
        font-weight: normal;
        font-size: 1rem;
        @media only screen and (min-width: 641px) {
            font-size: 1.125rem;
        }
    }`,
    'article-h-subheader': css`
    .fd-typography.article-h-subheader {
        margin-top: 36px;
        margin-bottom: 0;
        line-height: inherit;
        padding: 0;
        margin: 2.25rem 0 0 0;
        font-family: 'ArnhemProBold', serif;
        font-weight: normal;
        font-size: 1.375rem;
    }`,
    'article-h-longread-subheader': css`
    .fd-typography.article-h-longread-subheader {
        margin: 0;
        padding: 0;
        max-width: 719px;
        margin: 2.25rem auto 0 auto;
        font-weight: normal;
        font-size: 1.375rem;
        font-family: 'ArnhemProBold', serif;
    }`,
    'article-h-inline-number-frame': css`
    .fd-typography.article-h-inline-number-frame {
        margin: 0;
        padding: 0;
        font-weight: normal;
        color: #49a4a2;
        font-size: 3.125rem;
        font-family: 'ConsortWebRegular', serif;
        line-height: 1em;
    }`,
    'article-h-longread-inline-number-frame': css`
    .fd-typography.article-h-longread-inline-number-frame {
        margin: 0;
        padding: 0;
        font-weight: normal;
        color: #f05031;
        font-size: 3.125rem;
        font-family: 'ConsortWebRegular', serif;
        line-height: 1em;
    }`,
    'article-h-persoonlijk-inline-number-frame': css`
    .fd-typography.article-h-persoonlijk-inline-number-frame {
        margin: 0;
        padding: 0;
        font-weight: normal;
        color: #e57e30;
        font-size: 3.125rem;
        font-family: 'ConsortWebRegular', serif;
        line-height: 1em;
    }`,
    'article-h-inline-link-block': css`
    .fd-typography.article-h-inline-link-block {
        margin: 0;
        padding: 0;
        color: #191919;
        font-weight: normal;
        font-size: 1.0625rem;
        font-family: 'ProximaNovaRegular', sans-serif;
        line-height: 1.2em;
    }`,
    'article-h-subheader2': css`
    .fd-typography.article-h-subheader2 {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        display: block;
        font-weight: normal;
        margin: 5rem auto 1.25rem auto;
        line-height: 1.15;
        font-family: 'ArnhemProBlond', serif;
        font-size: 1.875rem;
        @media only screen and (min-width: 1025) {
            font-size: 2.8125rem;
        }
    }`,
    'article-h-longread-subheader2': css`
    .fd-typography.article-h-longread-subheader2 {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        display: block;
        max-width: 719px;
        margin: 5rem auto 1.25rem auto;
        line-height: 1.15;
        font-family: 'ArnhemProBlond', serif;
        font-weight: normal;
        font-size: 1.875rem;
        @media only screen and (min-width: 1025) {
            font-size: 2.8125rem;
        }
    }`,
    'article-h-inline': css`
    .fd-typography.article-h-inline {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        display: block;
        line-height: 1.1em;
        font-weight: normal;
        font-size: 1.25rem;
        font-family: 'ProximaNovaBold', sans-serif;
        color: #49a4a2;
        margin-bottom: 1rem;
    }`,
    'article-h-longread-inline': css`
    .fd-typography.article-h-longread-inline {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        display: block;
        line-height: 1.1em;
        font-weight: normal;
        font-size: 1.25rem;
        font-family: 'ProximaNovaBold', sans-serif;
        color: #f05031;
        margin-bottom: 1rem;
    }`,
    'article-h-persoonlijk-inline': css`
    .fd-typography.article-h-persoonlijk-inline {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        display: block;
        line-height: 1.1em;
        font-weight: normal;
        font-size: 1.25rem;
        font-family: 'ProximaNovaBold', sans-serif;
        color: #e57e30;
        margin-bottom: 1rem;
    }`,
    'article-h-inline-stack-frame': css`
    .fd-typography.article-h-inline-stack-frame {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        display: block;
        line-height: 1.1em;
        font-weight: normal;
        font-size: 1.5rem;
        font-family: 'ProximaNovaBold', sans-serif;
        color: #4d494C;
        line-height: 2.025rem;
        margin: 0;
    }`,
    'card-h': css`
    .fd-typography.card-h {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        display: block;
        color: #49a4a2;
        font-family: 'ProximaNova', sans-serif;
        line-height: 1.2em;
        font-weight: 600;
        font-size: 1rem;
        @media only screen and (min-width: 641px) {
            font-size: 1.0625rem;
        }
    }`,
    'card-h-longread': css`
    .fd-typography.card-h-longread {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        display: block;
        color: #f05031;
        font-family: 'ProximaNovaBold', sans-serif;
        line-height: 1.2em;
        font-weight: normal;
        font-size: 1rem;
        @media only screen and (min-width: 641px) {
            font-size: 1.25rem;
        }
    }`,
    'card-h-persoonlijk': css`
    .fd-typography.card-h-persoonlijk {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        display: block;
        color: #e57e30;
        font-family: 'ProximaNovaBold', sans-serif;
        line-height: 1.2em;
        font-weight: normal;
        font-size: 1rem;
        @media only screen and (min-width: 641px) {
            font-size: 1.25rem;
        }
    }`,
};

export const paragraphStyles: TextStyle = {
    'article-p':  css`
    .fd-typography.article-p {
        margin: 0;
        padding: 0;
        font-family: 'ArnhemProBlond', serif;
        line-height: 1.5em;
        margin: 0 0 .5em 0;
        font-weight: normal;
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
    }`,
    'article-p-persoonlijk':  css`
    .fd-typography.article-p-persoonlijk {
        margin: 0;
        padding: 0;
        font-family: 'ArnhemProBlond', serif;
        line-height: 1.5em;
        margin: 0 0 .5em 0;
        font-weight: normal;
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
            color: #e57e30;
            cursor: pointer;
            text-decoration: none;
        }
    }`,
    'article-p-longread':  css`
    .fd-typography.article-p-longread {
        margin: 0;
        padding: 0;
        max-width: 719px;
        margin-left: auto;
        margin-right: auto;
        width: auto;
        margin-bottom: 0.625rem;
        font-weight: normal;
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
            margin: 0 .5rem 0 -.5rem;
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
    'article-p-longread-persoonlijk':  css`
    .fd-typography.article-p-longread-persoonlijk {
        margin: 0;
        padding: 0;
        max-width: 719px;
        margin-left: auto;
        margin-right: auto;
        width: auto;
        margin-bottom: 0.625rem;
        font-weight: normal;
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
            margin: 0 .5rem 0 -.5rem;
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
    'article-p-intro': css`
    .fd-typography.article-p-intro {
        margin: 0;
        padding: 0;
        color: #191919;
        width: 100%;
        margin: 0;
        font-weight: normal;
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
    'article-p-longread-intro': css`
    .fd-typography.article-p-longread-intro {
        margin: 0;
        padding: 0;
        color: #8a8176;
        max-width: 719px;
        margin: 0 auto;
        width: auto;
        font-weight: normal;
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
    'article-p-inline-summary': css`
    .fd-typography.article-p-inline-summary {
        margin: 0;
        padding: 0;
        display: inline-block;
        width: 100%;
        font-family: 'ProximaNovaRegular', sans-serif;
        font-weight: normal;
        font-size: 1.0625rem;
        line-height: 1.2;
        margin: 0 0 0.9375rem 0;
    }`,
    'article-p-inline-number-frame': css`
    .fd-typography.article-p-inline-number-frame {
        margin: 0;
        padding: 0;
        color: #49a4a2;
        font-family: 'ProximaNovaRegular', sans-serif;
        font-weight: normal;
        font-size: 1.0625rem;
        line-height: 1.2;
        margin: 0 0 0.65625rem 0;
    }`,
    'article-p-longread-inline-number-frame': css`
    .fd-typography.article-p-longread-inline-number-frame {
        margin: 0;
        padding: 0;
        color: #f05031;
        font-family: 'ProximaNovaRegular', sans-serif;
        font-weight: normal;
        font-size: 1.0625rem;
        line-height: 1.2;
        margin: 0 0 0.65625rem 0;
    }`,
    'article-p-persoonlijk-inline-number-frame': css`
    .fd-typography.article-p-persoonlijk-inline-number-frame {
        margin: 0;
        padding: 0;
        color: #e57e30;
        font-family: 'ProximaNovaRegular', sans-serif;
        font-weight: normal;
        font-size: 1.0625rem;
        line-height: 1.2;
        margin: 0 0 0.65625rem 0;
    }`,
    'article-p-inline-text-frame': css`
    .fd-typography.article-p-inline-text-frame {
        margin: 0;
        padding: 0;
        display: inline-block;
        width: 100%;
        font-weight: normal;
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
    'article-p-longread-inline-text-frame': css`
    .fd-typography.article-p-longread-inline-text-frame {
        margin: 0;
        padding: 0;
        display: inline-block;
        width: 100%;
        font-weight: normal;
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
    'article-p-persoonlijk-inline-text-frame': css`
    .fd-typography.article-p-persoonlijk-inline-text-frame {
        margin: 0;
        padding: 0;
        display: inline-block;
        width: 100%;
        font-weight: normal;
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
    'article-p-inline-stack-frame': css`
    .fd-typography.article-p-inline-stack-frame {
        margin: 0;
        padding: 0;
        display: inline-block;
        font-weight: normal;
        font-size: 1.5rem;
        font-family: 'ProximaNovaBold', sans-serif;
        color: #49a4a2;
        line-height: 2.025rem;
        margin: 0;
    }`,
    'article-p-longread-inline-stack-frame': css`
    .fd-typography.article-p-longread-inline-stack-frame {
        margin: 0;
        padding: 0;
        display: inline-block;
        font-weight: normal;
        font-size: 1.5rem;
        font-family: 'ProximaNovaBold', sans-serif;
        color: #f05031;
        line-height: 2.025rem;
        margin: 0;
    }`,
    'article-p-persoonlijk-inline-stack-frame': css`
    .fd-typography.article-p-persoonlijk-inline-stack-frame {
        margin: 0;
        padding: 0;
        display: inline-block;
        font-weight: normal;
        font-size: 1.5rem;
        font-family: 'ProximaNovaBold', sans-serif;
        color: #e57e30;
        line-height: 2.025rem;
        margin: 0;
    }`,
    'article-p-inline-link-block': css`
    .fd-typography.article-p-inline-link-block {
        margin: 0;
        padding: 0;
        color: #49a4a2;
        font-weight: normal;
        font-size: 1rem;
        font-family: 'ProximaNovaBold', sans-serif;
        line-height: 1.1em;
        @media only screen and (min-width: 641px) {
            font-size: 1.125rem;
        }
    }`,
    'article-p-longread-inline-link-block': css`
    .fd-typography.article-p-longread-inline-link-block {
        margin: 0;
        padding: 0;
        color: #f05031;
        font-weight: normal;
        font-size: 1rem;
        font-family: 'ProximaNovaBold', sans-serif;
        line-height: 1.1em;
        @media only screen and (min-width: 641px) {
            font-size: 1.125rem;
        }
    }`,
    'article-p-persoonlijk-inline-link-block': css`
    .fd-typography.article-p-persoonlijk-inline-link-block {
        margin: 0;
        padding: 0;
        color: #e57e30;
        font-weight: normal;
        font-size: 1rem;
        font-family: 'ProximaNovaBold', sans-serif;
        line-height: 1.1em;
        @media only screen and (min-width: 641px) {
            font-size: 1.125rem;
        }
    }`,
    'article-p-inline-bullet-points': css`
    .fd-typography.article-p-inline-bullet-points {
        margin: 0;
        padding: 0;
        margin: 0 0 0.9375rem 0;
        color: #191919;
        font-weight: normal;
        font-size: 1.25rem;
        font-family: 'ProximaNovaRegular', sans-serif;
        line-height: 1.2;
    }`,
    'article-inline-quote': css`
    .fd-typography.article-inline-quote {
        margin: 0;
        padding: 0;
        font-weight: normal;
        blockquote {
            color: #49a4a2;
            display: inline;
            margin: 0 0 0 -6.5px;
            line-height: 1.4;
            font-size: 1rem;
            font-family: 'ArnhemProBold', serif;
            @media only screen and (min-width: 1025px) {
                line-height: 1.28;
                font-size: 1.9375rem;
            }
        }
        figcaption {
            color: #49a4a2;
            font-family: 'ProximaNovaRegular', sans-serif;
            font-size: 1rem;
            line-height: 1.2em;
            padding: 6px 0;
            display: inline-block;
            @media only screen and (min-width: 641px) {
                font-size: 1.0625rem;
            }
        }
    }`,
    'article-longread-inline-quote': css`
    .fd-typography.article-longread-inline-quote {
        margin: 0;
        padding: 0;
        font-weight: normal;
        blockquote {
            color: #f05031;
            display: inline;
            margin: 0 0 0 -6.5px;
            line-height: 1.4;
            font-size: 1rem;
            font-family: 'ArnhemProBold', serif;
            @media only screen and (min-width: 1025px) {
                line-height: 1.28;
                font-size: 1.9375rem;
            }
        }
        figcaption {
            color: #f05031;
            font-family: 'ProximaNovaRegular', sans-serif;
            font-size: 1rem;
            line-height: 1.2em;
            padding: 6px 0;
            display: inline-block;
            @media only screen and (min-width: 641px) {
                font-size: 1.0625rem;
            }
        }
    }`,
    'article-persoonlijk-inline-quote': css`
    .fd-typography.article-persoonlijk-inline-quote {
        margin: 0;
        padding: 0;
        color: #e57e30;
        font-weight: normal;
        blockquote {
            color: #e57e30;
            display: inline;
            margin: 0 0 0 -6.5px;
            line-height: 1.4;
            font-size: 1rem;
            font-family: 'ArnhemProBold', serif;
            @media only screen and (min-width: 1025px) {
                line-height: 1.28;
                font-size: 1.9375rem;
            }
        }
        figcaption {
            color: #e57e30;
            font-family: 'ProximaNovaRegular', sans-serif;
            font-size: 1rem;
            line-height: 1.2em;
            padding: 6px 0;
            display: inline-block;
            @media only screen and (min-width: 641px) {
                font-size: 1.0625rem;
            }
        }
    }`
};

export const textStyles = {...figcaptionStyles, ...headingStyles, ...paragraphStyles};
