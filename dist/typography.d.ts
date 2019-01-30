import { PureComponent } from 'react';
import H1, { H1Style } from './H1';
import H2, { H2Style } from './H2';
import H3, { H3Style } from './H3';
import P, { PStyle } from './P';
import FigCaption, { FigCaptionStyle } from './FigCaption';
export { H1, H1Style };
export { H2, H2Style };
export { H3, H3Style };
export { P, PStyle };
export { FigCaption, FigCaptionStyle };
export declare const AllTypographyStyle: import("styled-components").GlobalStyleComponent<{}, import("styled-components").DefaultTheme>;
declare type Style = 'article-p' | 'article-p-longread' | 'article-p-longread-persoonlijk' | 'article-p-intro' | 'article-p-longread-intro' | 'article-p-summary' | 'article-p-number-frame' | 'article-p-longread-number-frame' | 'article-p-text-frame' | 'article-p-longread-text-frame' | 'article-p-longread-persoonlijk-text-frame' | 'article-p-stack-frame' | 'article-p-longread-stack-frame' | 'article-p-link-block' | 'article-p-longread-link-block' | 'article-p-bullet-points';
declare type TextStyle = {
    [K in Style]?: any;
};
export interface Props {
    textStyle: Style | string & Style;
    className?: string;
}
export declare const textStyles: TextStyle;
export default class TypoGraphy extends PureComponent<Props, any> {
    render(): JSX.Element;
}
export declare function getTextStyle(textStyle: Style): any;
export declare function getAllTextStyles(filter?: Style[]): any;
