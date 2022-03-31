import * as React from 'react';
interface IProps {
    children?: string | React.ReactNode;
    gap?: string;
    padding?: string;
    width?: string;
    height?: string;
    jContent?: 'center' | 'flex-end' | 'flex-start' | 'space-between';
    alignItems?: 'center' | 'flex-end' | 'flex-start';
    fDirection?: 'column' | 'row';
    onClick?(): void;
}
export declare const FlexContainer: (props: IProps) => JSX.Element;
export {};
