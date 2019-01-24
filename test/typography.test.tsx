import TestRenderer from 'react-test-renderer';
import {H1} from '../src/typography';
import React from 'react';

describe('Typography', () => {
    test('renders h1 correctly', () => {
        let h1 = TestRenderer.create(<H1/>);
        expect(h1.toJSON()).toMatchSnapshot();
        h1 = TestRenderer.create(<H1 className="article-longread-persoonlijk"/>);
        expect(h1.toJSON()).toMatchSnapshot();
    });
});