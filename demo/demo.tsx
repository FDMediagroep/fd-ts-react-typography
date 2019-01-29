import React from 'react';
import ReactDOM from 'react-dom';
import {H1, H3, P, H2} from "../src/typography";
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        background-color: #ffeadb;
    }
    div {
        margin-bottom: 1rem;
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
            <H2 className="article-longread-cyferkader">.fd-h2.article-longread-cyferkader</H2>
            <H2 className="article-subheader">.fd-h2.article-subheader (tussenkop)</H2>
        </fieldset>

        <fieldset>
            <legend>h3</legend>
            <H3 className="card">.fd-h3.card</H3>
            <H3>.fd-h3 (tabs, related-articles, most-read)</H3>
            <H3 className="article-subheader">.fd-h3.article-subheader (subkop)</H3>
        </fieldset>

        <fieldset>
            <legend>p</legend>
            <P className="article-longread-intro">.fd-paragraph.article-longread-intro</P>
            <P className="article">.fd-paragraph.article</P>
            <P className="article"><strong>.fd-paragraph.article (strong)</strong></P>
            <P className="article"><em>.fd-paragraph.article (emphasised)</em></P>
            <P className="article-summary-p">.fd-paragraph.article-summary-p</P>
            <P className="article-longread-cyferkader">.fd-paragraph.article-longread-cyferkader</P>
        </fieldset>
    </>,
    document.getElementById('root'));
