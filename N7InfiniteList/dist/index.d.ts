import React from 'react';
interface IProps {
    children?: string | React.ReactNode;
    loadMore(dataLength: number): void;
    countLimit: number | null;
    dataLength: number;
    minWidth?: string;
    maxHeight?: string;
}
export declare const InfiniteList: (props: IProps) => JSX.Element;
export {};
