import MainPage from "../pages/MainPage";
import React from "react";
import InfiniteScroll from "../pages/InfiniteScroll";

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}
export enum RouteNames {
    MAIN = '/',
    INFINITE_SCROLL = '/infinite-scroll',
}

export const routes: IRoute[] = [
    {path: RouteNames.MAIN, exact: true,  component: MainPage},
    {path: RouteNames.INFINITE_SCROLL, component: InfiniteScroll},
];
export const publicRoutes: IRoute[] = [];
export const privateRoutes: IRoute[] = [];