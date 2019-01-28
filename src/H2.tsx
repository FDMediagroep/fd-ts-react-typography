import React, { PureComponent } from "react";
import { createGlobalStyle } from "styled-components";

export default class H2 extends PureComponent<any, any> {
    render() {
        return (
            <>
                <GlobalStyle/>
                <h2 {...this.props} className={`fd-h2${this.props.className ? ` ${this.props.className}`: ''}`}>{this.props.children}</h2>
            </>
        );
    }
}

const GlobalStyle = createGlobalStyle`
    .fd-h2 {
        margin: 0;
        padding: 0;
        &.article-longread-cyferkader {
            color: #f05031;
            font-size: 3.125rem;
            font-family: 'ConsortWebRegular', serif;
            line-height: 1em;
        }
    }
`;

export {GlobalStyle as H2Style};
