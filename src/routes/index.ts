import MainPage from "../pages/MainPage";
import Login from "../pages/Login";
import React from "react";

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}
export enum RouteNames {
    MAIN = '/',
    LOGIN = '/login',
}

export const routes: IRoute[] = [
    {path: RouteNames.MAIN, exact: true,  component: MainPage},
    {path: RouteNames.LOGIN, component: Login},
];
export const publicRoutes: IRoute[] = [];
export const privateRoutes: IRoute[] = [];