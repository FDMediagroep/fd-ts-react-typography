import { PureComponent } from "react";
export interface Props {
    caption?: string;
    className?: string;
    photographer?: string;
}
export default class FigCaption extends PureComponent<Props, any> {
    render(): JSX.Element;
}
declare const GlobalStyle: import("styled-components").GlobalStyleComponent<{}, import("styled-components").DefaultTheme>;
export { GlobalStyle as FigCaptionStyle };
