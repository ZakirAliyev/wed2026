import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const MainPage = lazy(() => import("../pages/UserPages/index.jsx"));
const HomePage = lazy(() => import("../pages/UserPages/HomePage/index.jsx"));
const AboutPage = lazy(() => import("../pages/UserPages/AboutPage/index.jsx"));

export const ROUTES = [
    {
        path: '/',
        element: <MainPage/>,
        children: [
            {
                index: true,
                element: <HomePage/>,
            },
            {
                path: 'about',
                element: <AboutPage/>,
            }
        ]
    },
    {
        path: 'en',
        element: <Navigate to="/" replace />
    },
    {
        path: 'az',
        element: <Navigate to="/" replace />
    },
    {
        path: 'en/*',
        element: <Navigate to="/" replace />
    },
    {
        path: 'az/*',
        element: <Navigate to="/" replace />
    }
];