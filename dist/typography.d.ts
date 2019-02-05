import { PureComponent } from 'react';
import { AllTypes } from './styles';
export interface Props {
    textstyle: AllTypes;
    className?: string;
}
export default class TypoGraphy extends PureComponent<Props, any> {
    render(): JSX.Element;
}
export declare function getTextStyle(textStyle: AllTypes): any;
export declare function getAllTextStyles(filter?: AllTypes[]): any;
