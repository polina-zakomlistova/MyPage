import { RouteProps } from 'react-router-dom';
//components
import { MainPage } from 'pages/MainPage';
import { NotFound } from 'pages/NotFound/ui/NotFound';

export enum AppRoutes {
    MAIN_PAGE = 'MainPage',
    NOT_FOUND = 'NotFound',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN_PAGE]: '/',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN_PAGE]: {
        path: RoutePath.MainPage,
        element: <MainPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.NotFound,
        element: <NotFound />,
    },
};
