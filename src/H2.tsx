import React, { PureComponent } from "react";
import { createGlobalStyle } from "styled-components";

export default class H2 extends PureComponent<any, any> {
    render() {
        return (
            <>
                <GlobalStyle/>
                <h2 {...this.props} className={`fd-h2${this.props.className ? ` ${this.props.className}` : ''}`}>{this.props.children}</h2>
            </>
        );
    }
}

const GlobalStyle = createGlobalStyle`
.fd-h2 {
    margin: 0;
    padding: 0;
    &.article-subheader {
        max-width: 719px;
        padding-left: 0;
        padding-right: 0;
        margin: 2.25rem auto 0 auto;
        font-size: 1.375rem;
        font-family: 'ArnhemProBold', serif;
    }

    &.article-number-frame {
        font-weight: 400;
        color: #49a4a2;
        font-size: 3.125rem;
        font-family: 'ConsortWebRegular', serif;
        line-height: 1em;
    }
    &.article-longread-number-frame {
        font-weight: 400;
        color: #f05031;
        font-size: 3.125rem;
        font-family: 'ConsortWebRegular', serif;
        line-height: 1em;
    }

    &.article-link-block {
        color: #191919;
        font-size: 1.0625rem;
        font-family: 'ProximaNovaRegular', sans-serif;
        line-height: 1.2em;
    }
}
`;

export {GlobalStyle as H2Style};
