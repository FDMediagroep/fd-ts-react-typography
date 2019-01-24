import React from 'react';
import ReactDOM from 'react-dom';
import {H1, H3} from "../src/typography";
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

        <H3 className="card">.fd-h3.card</H3>
        <H3>.fd-h3 (tabs)</H3>
    </>,
    document.getElementById('root'));
