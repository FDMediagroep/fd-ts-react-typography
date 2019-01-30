import TestRenderer from 'react-test-renderer';
import TypoGraphy from '../src/typography';
import React from 'react';

describe('Typography', () => {
    test('renders heading correctly', () => {
        let h1 = TestRenderer.create(<TypoGraphy textStyle="article-h-longread"><h1>longread</h1></TypoGraphy>);
        expect(h1.toJSON()).toMatchSnapshot();
        h1 = TestRenderer.create(<TypoGraphy textStyle="page-h"><h1>page</h1></TypoGraphy>);
        expect(h1.toJSON()).toMatchSnapshot();
        let h = TestRenderer.create(<TypoGraphy textStyle="article-h-subheader"><h2>subheader</h2></TypoGraphy>);
        expect(h.toJSON()).toMatchSnapshot();
        h = TestRenderer.create(<TypoGraphy textStyle="article-h-inline-number-frame"><h2>number frame</h2></TypoGraphy>);
        expect(h.toJSON()).toMatchSnapshot();
        h = TestRenderer.create(<TypoGraphy textStyle="article-h-subheader2"><h3>Card</h3></TypoGraphy>);
        expect(h.toJSON()).toMatchSnapshot();
        h = TestRenderer.create(<TypoGraphy textStyle="card-h"><h3>Card</h3></TypoGraphy>);
        expect(h.toJSON()).toMatchSnapshot();
    });

    test('renders p correctly', () => {
        let p = TestRenderer.create(<TypoGraphy textStyle="article-p"><p>article</p></TypoGraphy>);
        expect(p.toJSON()).toMatchSnapshot();
        p = TestRenderer.create(<TypoGraphy textStyle="article-p-longread"><p>article longread</p></TypoGraphy>);
        expect(p.toJSON()).toMatchSnapshot();
    });

    test('renders figcaption correctly', () => {
        let figcaption = TestRenderer.create(
            <TypoGraphy textStyle='article-figcaption-inline'><figcaption><span className="caption">caption text</span><span className="photographer">source: kitchensink</span></figcaption></TypoGraphy>
        );
        expect(figcaption.toJSON()).toMatchSnapshot();
        figcaption = TestRenderer.create(
            <TypoGraphy textStyle='article-figcaption-longread-inline'><figcaption><span className="caption">article longread inline</span><span className="photographer">source: kitchensink</span></figcaption></TypoGraphy>
        );
        expect(figcaption.toJSON()).toMatchSnapshot();
    });

});
