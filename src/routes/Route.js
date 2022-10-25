import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Blog from '../pages/Blog';
import Courses from '../pages/Courses';
import FAQ from '../pages/FAQ';
import Home from '../pages/Home';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/courses', element: <Courses /> },
            { path: '/blog', element: <Blog /> },
            { path: '/faq', element: <FAQ /> },
        ],
    },
]);
