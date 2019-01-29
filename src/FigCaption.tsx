import React, { PureComponent } from "react";
import { createGlobalStyle } from "styled-components";

export interface Props {
    caption?: string;
    className?: string;
    photographer?: string;
}

export default class FigCaption extends PureComponent<Props, any> {
    render() {
        return (
            <>
                <GlobalStyle/>
                <figcaption {...this.props} className={`fd-figcaption${this.props.className ? ` ${this.props.className}` : ''}`}>
                    <span className="caption">{this.props.caption}</span>
                    <span className="photographer">{this.props.photographer}</span>
                </figcaption>
            </>
        );
    }
}

const GlobalStyle = createGlobalStyle`
.fd-figcaption {
    &.article-inline {
        color: #4c4c4c;
        text-align: left;
        padding: 0.375rem 0;
        font-family: 'ProximaNovaRegular', sans-serif;
        line-height: 1.2em;
        font-size: 13px;
        @media only screen and (min-width: 641px) {
            font-size: 14px;
        }
        .photographer {
            margin-left: 5px;
            color: #677381;
        }
    }

    &.article-longread-inline {
        color: #8a8176;
        text-align: left;
        padding: 0.375rem 0;
        font-family: 'ProximaNovaRegular', sans-serif;
        line-height: 1.2em;
        font-size: 13px;
        @media only screen and (min-width: 641px) {
            font-size: 14px;
        }
        .photographer {
            margin-left: 5px;
            color: #677381;
        }
    }
}
`;

export {GlobalStyle as FigCaptionStyle};
