import React, { PureComponent } from 'react';
import { createGlobalStyle } from 'styled-components';
import { textStyles, AllTypes } from './styles';

export interface Props {
    textstyle: AllTypes;
    className?: string;
}

export default class TypoGraphy extends PureComponent<Props, any> {
    render() {
        const updatedChildren = React.Children.map(this.props.children, (child: any) => {
            return React.cloneElement(child, {...this.props, className: `fd-typography ${this.props.textstyle}${this.props.className ? ` ${this.props.className}` : ''}`, textStyle: null}, child.props.children);
        });
        return (
            <>
                {React.createElement(textStyles[this.props.textstyle] as any, {}, null)}
                {updatedChildren}
            </>
        );
    }
}

export function getTextStyle(textStyle: AllTypes) {
    return textStyles[textStyle];
}

export function getAllTextStyles(filter?: AllTypes[]) {
    const tmp: any = textStyles;
    let result: any;
    for (const key in tmp) {
        if (filter && filter.indexOf(key as any) === -1) { continue; }
        if (result) {
            result = createGlobalStyle`${result.globalStyle.rules}${tmp[key].globalStyle.rules}`;
        } else {
            result = createGlobalStyle`${tmp[key].globalStyle.rules}`;
        }
    }
    return result;
}
