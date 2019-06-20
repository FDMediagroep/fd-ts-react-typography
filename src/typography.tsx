import React, { PureComponent } from 'react';
import { css, createGlobalStyle } from 'styled-components';
import { textStyles, AllTypes } from './styles';

export interface Props {
    textStyle: AllTypes;
    className?: string;
}

export default class TypoGraphy extends PureComponent<Props, any> {
    render() {
        const updatedChildren = React.Children.map(this.props.children, (child: any) => {
            return React.cloneElement(child, {...this.props, className: `fd-typography ${this.props.textStyle}${this.props.className ? ` ${this.props.className}` : ''}`, textstyle: undefined}, child.props.children);
        });
        return (
            <>
                {React.createElement(createGlobalStyle(textStyles[this.props.textStyle]), {}, null)}
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
            result = css`${result}${tmp[key]}`;
        } else {
            result = css`${tmp[key]}`;
        }
    }
    return result;
}
