import TestRenderer from 'react-test-renderer';
import {H1, H3} from '../src/typography';
import React from 'react';

describe('Typography', () => {
    test('renders h1 correctly', () => {
        let h1 = TestRenderer.create(<H1>Default</H1>);
        expect(h1.toJSON()).toMatchSnapshot();
        h1 = TestRenderer.create(<H1 className="article-longread-persoonlijk">article-longread-persoonlijk</H1>);
        expect(h1.toJSON()).toMatchSnapshot();
    });

    test('renders h3 correctly', () => {
        let h3 = TestRenderer.create(<H3>Default</H3>);
        expect(h3.toJSON()).toMatchSnapshot();
        h3 = TestRenderer.create(<H3 className="card">card</H3>);
        expect(h3.toJSON()).toMatchSnapshot();
    });
});