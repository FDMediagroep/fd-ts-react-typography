import React from 'react';
import ReactDOM from 'react-dom';
import TypoGraphy from "../src/typography";
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
            <legend>heading</legend>
            <TypoGraphy textStyle="article-h-longread-persoonlijk"><h1>.fd-typography.article-h-longread-persoonlijk</h1></TypoGraphy>
            <TypoGraphy textStyle="article-h-longread"><h1>.fd-typography.article-h-longread</h1></TypoGraphy>
            <TypoGraphy textStyle="article-h"><h1>.fd-typography.article-h</h1></TypoGraphy>
            <TypoGraphy textStyle="service-h"><h1>.fd-typography.service-h</h1></TypoGraphy>
            <TypoGraphy textStyle="service-accordion-h"><h1><a>.fd-typography.service-accordion-h</a></h1></TypoGraphy>
            <TypoGraphy textStyle="opening-teaser-h"><h1>.fd-typography.opening-teaser-h</h1></TypoGraphy>
            <TypoGraphy textStyle="teaser-h"><h1>.fd-typography.teaser-h</h1></TypoGraphy>
            <TypoGraphy textStyle="cover-teaser-h"><h1>.fd-typography.cover-teaser-h</h1></TypoGraphy>
            <TypoGraphy textStyle="square-teaser-h"><h1>.fd-typography.square-teaser-h</h1></TypoGraphy>
            <TypoGraphy textStyle="my-news-aside-h"><h1>.fd-typography.my-news-aside-h</h1></TypoGraphy>

            <TypoGraphy textStyle="article-h-inline-number-frame"><h2>.fd-typography.article-h-inline-number-frame</h2></TypoGraphy>
            <TypoGraphy textStyle="article-h-longread-inline-number-frame"><h2>.fd-typography.article-h-longread-inline-number-frame</h2></TypoGraphy>
            <TypoGraphy textStyle="article-h-persoonlijk-inline-number-frame"><h2>.fd-typography.article-h-persoonlijk-inline-number-frame</h2></TypoGraphy>
            <TypoGraphy textStyle="article-h-subheader"><h2>.fd-typography.article-h-subheader (tussenkop)</h2></TypoGraphy>
            <TypoGraphy textStyle="article-h-longread-subheader"><h2>.fd-typography.article-h-longread-subheader (tussenkop)</h2></TypoGraphy>
            <TypoGraphy textStyle="article-h-inline-link-block"><h2>.fd-typography.article-h-inline-link-block</h2></TypoGraphy>

            <TypoGraphy textStyle="article-h-subheader2"><h3>.fd-typography.article-h-subheader2 (subkop)</h3></TypoGraphy>
            <TypoGraphy textStyle="article-h-longread-subheader2"><h3>.fd-typography.article-h-longread-subheader2 (subkop)</h3></TypoGraphy>
            <TypoGraphy textStyle="article-h-inline"><h3>.fd-typography.article-h-inline</h3></TypoGraphy>
            <TypoGraphy textStyle="article-h-longread-inline"><h3>.fd-typography.article-h-longread-inline</h3></TypoGraphy>
            <TypoGraphy textStyle="article-h-persoonlijk-inline"><h3>.fd-typography.article-h-persoonlijk-inline</h3></TypoGraphy>
            <TypoGraphy textStyle="article-h-inline-stack-frame"><h3>.fd-typography.article-h-inline-stack-frame</h3></TypoGraphy>
            <TypoGraphy textStyle="card-h"><h3>.fd-typography.h-card</h3></TypoGraphy>
            <TypoGraphy textStyle="card-h-longread"><h3>.fd-typography.h-card-longread</h3></TypoGraphy>
            <TypoGraphy textStyle="card-h-persoonlijk"><h3>.fd-typography.h-card-persoonlijk</h3></TypoGraphy>
        </fieldset>

        <fieldset>
            <legend>paragraphs</legend>
            <TypoGraphy textStyle="article-p-intro"><p>.fd-typography.article-p-intro</p></TypoGraphy>
            <TypoGraphy textStyle="article-p-longread-intro"><p>.fd-typography.article-p-longread-intro</p></TypoGraphy>
            <div>
                <TypoGraphy textStyle="article-p"><p>.fd-typography.article-p</p></TypoGraphy>
                <TypoGraphy textStyle="article-p"><p><strong>.fd-typography.article-p (strong)</strong></p></TypoGraphy>
                <TypoGraphy textStyle="article-p"><p><em>.fd-typography.article-p (emphasized)</em></p></TypoGraphy>
                <TypoGraphy textStyle="article-p"><p><a href="">.fd-typography.article-p (link)</a></p></TypoGraphy>
            </div>
            <div>
                <TypoGraphy textStyle="article-p-persoonlijk"><p>.fd-typography.article-p-persoonlijk</p></TypoGraphy>
                <TypoGraphy textStyle="article-p-persoonlijk"><p><strong>.fd-typography.article-p-persoonlijk (strong)</strong></p></TypoGraphy>
                <TypoGraphy textStyle="article-p-persoonlijk"><p><em>.fd-typography.article-p (emphasized)</em></p></TypoGraphy>
                <TypoGraphy textStyle="article-p-persoonlijk"><p><a href="">.fd-typography.article-p-persoonlijk (link)</a></p></TypoGraphy>
            </div>
            <div>
                <TypoGraphy textStyle="article-p-longread"><p>.fd-typography.article-p-longread</p></TypoGraphy>
                <TypoGraphy textStyle="article-p-longread"><p><strong>.fd-typography.article-p-longread (strong)</strong></p></TypoGraphy>
                <TypoGraphy textStyle="article-p-longread"><p><em>.fd-typography.article-p-longread (emphasized)</em></p></TypoGraphy>
                <TypoGraphy textStyle="article-p-longread"><p><a href="">.fd-typography.article-p-longread (link)</a></p></TypoGraphy>
            </div>
            <div>
                <TypoGraphy textStyle="article-p-longread-persoonlijk"><p>.fd-typography.article-p-longread-persoonlijk</p></TypoGraphy>
                <TypoGraphy textStyle="article-p-longread-persoonlijk"><p><strong>.fd-typography.article-p-longread-persoonlijk (strong)</strong></p></TypoGraphy>
                <TypoGraphy textStyle="article-p-longread-persoonlijk"><p><em>.fd-typography.article-p-longread-persoonlijk (emphasized)</em></p></TypoGraphy>
                <TypoGraphy textStyle="article-p-longread-persoonlijk"><p><a href="">.fd-typography.article-p-longread-persoonlijk (link)</a></p></TypoGraphy>
            </div>
            <TypoGraphy textStyle="article-p-inline-summary"><p>.fd-typography.article-p-summary</p></TypoGraphy>

            <TypoGraphy textStyle="article-p-inline-stack-frame"><p>.fd-typography.article-p-inline-stack-frame</p></TypoGraphy>
            <TypoGraphy textStyle="article-p-longread-inline-stack-frame"><p>.fd-typography.article-p-longread-inline-stack-frame</p></TypoGraphy>
            <TypoGraphy textStyle="article-p-persoonlijk-inline-stack-frame"><p>.fd-typography.article-p-persoonlijk-inline-stack-frame</p></TypoGraphy>

            <TypoGraphy textStyle="article-p-inline-number-frame"><p>.fd-typography.article-p-inline-number-frame</p></TypoGraphy>
            <TypoGraphy textStyle="article-p-longread-inline-number-frame"><p>.fd-typography.article-p-longread-inline-number-frame</p></TypoGraphy>
            <TypoGraphy textStyle="article-p-persoonlijk-inline-number-frame"><p>.fd-typography.article-p-persoonlijk-inline-number-frame</p></TypoGraphy>
            
            <div>
                <TypoGraphy textStyle="article-p-inline-text-frame"><p>.fd-typography.article-p-inline-text-frame</p></TypoGraphy>
            </div>
            <div>
                <TypoGraphy textStyle="article-p-longread-inline-text-frame"><p>.fd-typography.article-p-longread-inline-text-frame</p></TypoGraphy>
            </div>
            <div>
                <TypoGraphy textStyle="article-p-persoonlijk-inline-text-frame"><p>.fd-typography.article-p-persoonlijk-inline-text-frame</p></TypoGraphy>
            </div>

            <TypoGraphy textStyle="article-p-inline-link-block"><p>.fd-typography.article-p-inline-link-block</p></TypoGraphy>
            <TypoGraphy textStyle="article-p-longread-inline-link-block"><p>.fd-typography.article-p-longread-inline-link-block</p></TypoGraphy>
            <TypoGraphy textStyle="article-p-persoonlijk-inline-link-block"><p>.fd-typography.article-p-persoonlijk-inline-link-block</p></TypoGraphy>

            <TypoGraphy textStyle="article-p-inline-bullet-points"><p>.fd-typography.article-p-bullet-points</p></TypoGraphy>
        </fieldset>

        <fieldset>
            <legend>figcaption</legend>
            <TypoGraphy textStyle="article-inline-figcaption"><figcaption><span className="caption">.fd-typography.article-inline-figcaption</span> <span className="photographer">source: kitchensink</span></figcaption></TypoGraphy>
            <TypoGraphy textStyle="article-longread-inline-figcaption"><figcaption><span className="caption">.fd-typography.article-longread-inline-figcaption</span> <span className="photographer">source: kitchensink</span></figcaption></TypoGraphy>
        </fieldset>

        <fieldset>
            <legend>Quote</legend>
            <TypoGraphy textStyle="article-inline-quote"><figure><blockquote>.fd-typography.article-inline-figcaption</blockquote> <figcaption>&middot; Quotee</figcaption></figure></TypoGraphy>
            <TypoGraphy textStyle="article-longread-inline-quote"><figure><blockquote>.fd-typography.article-longread-inline-figcaption</blockquote> <figcaption>&middot; Quotee</figcaption></figure></TypoGraphy>
            <TypoGraphy textStyle="article-persoonlijk-inline-quote"><figure><blockquote>.fd-typography.article-persoonlijk-inline-figcaption</blockquote> <figcaption>&middot; Quotee</figcaption></figure></TypoGraphy>
        </fieldset>

    </>,
    document.getElementById('root'));
