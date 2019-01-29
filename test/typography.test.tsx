import TestRenderer from 'react-test-renderer';
import {H1, H3, H2, P, FigCaption} from '../src/typography';
import React from 'react';

describe('Typography', () => {
    test('renders h1 correctly', () => {
        let h1 = TestRenderer.create(<H1>Default</H1>);
        expect(h1.toJSON()).toMatchSnapshot();
        h1 = TestRenderer.create(<H1 className="article-longread-persoonlijk">article-longread-persoonlijk</H1>);
        expect(h1.toJSON()).toMatchSnapshot();
    });

    test('renders h2 correctly', () => {
        let h2 = TestRenderer.create(<H2>Default</H2>);
        expect(h2.toJSON()).toMatchSnapshot();
        h2 = TestRenderer.create(<H2 className="article-inline">article-inline</H2>);
        expect(h2.toJSON()).toMatchSnapshot();
    });

    test('renders h3 correctly', () => {
        let h3 = TestRenderer.create(<H3>Default</H3>);
        expect(h3.toJSON()).toMatchSnapshot();
        h3 = TestRenderer.create(<H3 className="card">card</H3>);
        expect(h3.toJSON()).toMatchSnapshot();
    });

    test('renders p correctly', () => {
        let p = TestRenderer.create(<P>Default</P>);
        expect(p.toJSON()).toMatchSnapshot();
        p = TestRenderer.create(<P className="article">article</P>);
        expect(p.toJSON()).toMatchSnapshot();
    });

    test('renders figcaption correctly', () => {
        let figcaption = TestRenderer.create(<FigCaption className="article-inline" caption="caption text" photographer="source: kitchensink"/>);
        expect(figcaption.toJSON()).toMatchSnapshot();
        figcaption = TestRenderer.create(<FigCaption className="article-longread-inline" caption="caption text" photographer="source: kitchensink"/>);
        expect(figcaption.toJSON()).toMatchSnapshot();
    });

});