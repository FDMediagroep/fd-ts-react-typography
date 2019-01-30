import React from 'react';
import ReactDOM from 'react-dom';
import TypoGraphy, {H1, H3, P, H2, FigCaption} from "../src/typography";
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        background-color: #ffeadb;
    }
    div {
        margin-bottom: 1rem;
    }

    fieldset {
        display: flex;
        flex-direction: column;
    }
`;

ReactDOM.render(<>
        <GlobalStyles/>

        <fieldset>
            <legend>h1</legend>
            <H1 className="article-longread-persoonlijk">.fd-h1.article-longread-persoonlijk</H1>
            <H1 className="article-longread">.fd-h1.article-longread</H1>
            <H1>.fd-h1 (article, dossier, tag)</H1>
            <H1 className="service">.fd-h1.service</H1>
            <H1 className="service-accordion"><a>.fd-h1.service-accordion</a></H1>
            <H1 className="opening-teaser">.fd-h1.opening-teaser</H1>
            <H1 className="teaser">.fd-h1.teaser</H1>
            <H1 className="cover-teaser">.fd-h1.cover-teaser (persoonlijk)</H1>
            <H1 className="square-teaser">.fd-h1.square-teaser</H1>
            <H1 className="my-news-aside">.fd-h1.my-news-aside</H1>
        </fieldset>

        <fieldset>
            <legend>h2</legend>
            <H2 className="article-number-frame">.fd-h2.article-number-frame</H2>
            <H2 className="article-longread-number-frame">.fd-h2.article-longread-number-frame</H2>
            <H2 className="article-subheader">.fd-h2.article-subheader (tussenkop)</H2>
            <H2 className="article-link-block">.fd-h2.article-link-block</H2>
        </fieldset>

        <fieldset>
            <legend>h3</legend>
            <H3 className="article-subheader">.fd-h3.article-subheader (subkop)</H3>
            <H3 className="article-longread-subheader">.fd-h3.article-longread-subheader (subkop)</H3>
            <H3 className="article-inline">.fd-h3.article-inline</H3>
            <H3 className="article-longread-inline">.fd-h3.article-longread-inline</H3>
            <H3 className="article-inline-stack-frame">.fd-h3.article-inline-stack-frame</H3>
            <H3 className="card">.fd-h3.card</H3>
            <H3>.fd-h3 (tabs, related-articles, most-read)</H3>
        </fieldset>

        <fieldset>
            <legend>p</legend>
            <TypoGraphy textStyle="article-p-intro"><p>.fd-typography.article-p-intro</p></TypoGraphy>
            <P className="article-intro">.fd-paragraph.article-intro</P>
            <TypoGraphy textStyle="article-p-longread-intro"><p>.fd-typography.article-p-longread-intro</p></TypoGraphy>
            <P className="article-longread-intro">.fd-paragraph.article-longread-intro</P>
            <TypoGraphy textStyle="article-p"><p>.fd-typography.article-p</p></TypoGraphy>
            <P className="article">.fd-paragraph.article</P>
            <TypoGraphy textStyle="article-p-longread"><p>.fd-typography.article-p-longread</p></TypoGraphy>
            <P className="article-longread">.fd-paragraph.article-longread</P>
            <TypoGraphy textStyle="article-p"><p><strong>.fd-typography.article-p (strong)</strong></p></TypoGraphy>
            <P className="article"><strong>.fd-paragraph.article (strong)</strong></P>
            <TypoGraphy textStyle="article-p-longread"><p><strong>.fd-typography.article-p-longread (strong)</strong></p></TypoGraphy>
            <P className="article-longread"><strong>.fd-paragraph.article-longread (strong)</strong></P>
            <TypoGraphy textStyle="article-p"><p><em>.fd-typography.article-p (emphasized)</em></p></TypoGraphy>
            <P className="article"><em>.fd-paragraph.article (emphasized)</em></P>
            <TypoGraphy textStyle="article-p-longread"><p><em>.fd-typography.article-p-longread (emphasized)</em></p></TypoGraphy>
            <P className="article-longread"><em>.fd-paragraph.article-longread (emphasized)</em></P>
            <TypoGraphy textStyle="article-p"><p><a href="">.fd-typography.article-p (link)</a></p></TypoGraphy>
            <P className="article"><a href="">.fd-paragraph.article (link)</a></P>
            <TypoGraphy textStyle="article-p-longread"><p><a href="">.fd-typography.article-p-longread (link)</a></p></TypoGraphy>
            <P className="article-longread"><a href="">.fd-paragraph.article-longread (link)</a></P>
            <TypoGraphy textStyle="article-p-summary"><p>.fd-typography.article-p-summary</p></TypoGraphy>
            <P className="article-summary-p">.fd-paragraph.article-summary-p</P>
            <TypoGraphy textStyle="article-p-stack-frame"><p>.fd-typography.article-p-stack-frame</p></TypoGraphy>
            <P className="article-stack-frame">.fd-paragraph.article-stack-frame</P>
            <TypoGraphy textStyle="article-p-longread-stack-frame"><p>.fd-typography.article-p-longread-stack-frame</p></TypoGraphy>
            <P className="article-longread-stack-frame">.fd-paragraph.article-longread-stack-frame</P>
            <TypoGraphy textStyle="article-p-number-frame"><p>.fd-typography.article-p-number-frame</p></TypoGraphy>
            <P className="article-number-frame">.fd-paragraph.article-number-frame</P>
            <TypoGraphy textStyle="article-p-longread-number-frame"><p>.fd-typography.article-p-longread-number-frame</p></TypoGraphy>
            <P className="article-longread-number-frame">.fd-paragraph.article-longread-number-frame</P>
            <TypoGraphy textStyle="article-p-text-frame"><p>.fd-typography.article-p-text-frame</p></TypoGraphy>
            <P className="article-text-frame">.fd-paragraph.article-text-frame</P>
            <TypoGraphy textStyle="article-p-longread-text-frame"><p>.fd-typography.article-p-longread-text-frame</p></TypoGraphy>
            <P className="article-longread-text-frame">.fd-paragraph.article-longread-text-frame</P>
            <TypoGraphy textStyle="article-p-longread-persoonlijk-text-frame"><p>.fd-typography.article-p-longread-persoonlijk-text-frame</p></TypoGraphy>
            <P className="article-longread-persoonlijk-text-frame">.fd-paragraph.article-longread-persoonlijk-text-frame</P>
            <TypoGraphy textStyle="article-p-link-block"><p>.fd-typography.article-p-link-block</p></TypoGraphy>
            <P className="article-link-block">.fd-paragraph.article-link-block</P>
            <TypoGraphy textStyle="article-p-longread-link-block"><p>.fd-typography.article-p-longread-link-block</p></TypoGraphy>
            <P className="article-longread-link-block">.fd-paragraph.article-longread-link-block</P>
            <TypoGraphy textStyle="article-p-bullet-points"><p>.fd-typography.article-p-bullet-points</p></TypoGraphy>
            <P className="article-bullet-points">.fd-paragraph.article-bullet-points</P>
        </fieldset>

        <fieldset>
            <legend>figcaption</legend>
            <FigCaption className="article-inline" caption=".fd-figcaption.article-inline" photographer="source: kitchensink"/>
            <FigCaption className="article-longread-inline" caption=".fd-figcaption.article-longread-inline" photographer="source: kitchensink"/>
        </fieldset>

    </>,
    document.getElementById('root'));
