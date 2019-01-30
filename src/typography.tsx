import React, { PureComponent } from 'react';
import H1, {H1Style} from './H1';
import H2, {H2Style} from './H2';
import H3, {H3Style} from './H3';
import P, {PStyle} from './P';
import FigCaption, {FigCaptionStyle} from './FigCaption';
import { createGlobalStyle } from 'styled-components';

export {H1, H1Style};
export {H2, H2Style};
export {H3, H3Style};
export {P, PStyle};
export {FigCaption, FigCaptionStyle};
export const AllTypographyStyle = createGlobalStyle`
${(H1Style as any).globalStyle.rules}
${(H2Style as any).globalStyle.rules}
${(H3Style as any).globalStyle.rules}
${(PStyle as any).globalStyle.rules}
${(FigCaptionStyle as any).globalStyle.rules}
`;

type Style = 'article-p'
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

type TextStyle = {[K in Style]?: any};

export interface Props {
    textStyle: Style | string & Style;
    className?: string;
}

export const textStyles: TextStyle = {
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
}

export default class TypoGraphy extends PureComponent<Props, any> {
    render() {
        const updatedChildren = React.Children.map(this.props.children, (child: any) => {
            return React.cloneElement(child, {...this.props, className: `fd-typography ${this.props.textStyle}${this.props.className ? ` ${this.props.className}`: ''}`}, child.props.children);
        });
        return (
            <>
                {React.createElement(textStyles[this.props.textStyle] as any, {}, null)}
                {updatedChildren}
            </>
        );
    }
}

export function getStyle(textStyle: Style) {
    return textStyles[textStyle];
}
