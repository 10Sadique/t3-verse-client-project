import { createBrowserRouter } from 'react-router-dom';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import Main from '../layout/Main';
import Blog from '../pages/Blog';
import CheckoutPage from '../pages/CheckoutPage';
import CheckoutSuccess from '../pages/CheckoutSuccess';
import Courses from '../pages/Courses';
import ErrorPage from '../pages/ErrorPage';
import FAQ from '../pages/FAQ';
import Home from '../pages/Home';
import SingleCourseDetails from '../pages/SingleCourseDetails';
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            { path: '/', element: <Home /> },
            {
                path: '/courses',
                element: <Courses />,
                loader: async () => {
                    return fetch('https://t3-verse-server.vercel.app/courses');
                },
            },
            { path: '/blog', element: <Blog /> },
            { path: '/faq', element: <FAQ /> },
            {
                path: '/courses/:id',
                element: <SingleCourseDetails />,
                loader: async ({ params }) => {
                    return fetch(
                        `https://t3-verse-server.vercel.app/courses/${params.id}`
                    );
                },
            },
            {
                path: '/checkout/:id',
                element: (
                    <PrivateRoute>
                        <CheckoutPage />
                    </PrivateRoute>
                ),
                loader: async ({ params }) => {
                    return fetch(
                        `https://t3-verse-server.vercel.app/courses/${params.id}`
                    );
                },
            },
            {
                path: '/checkout/success/:id',
                element: (
                    <PrivateRoute>
                        <CheckoutSuccess />
                    </PrivateRoute>
                ),
                loader: async ({ params }) => {
                    return fetch(
                        `https://t3-verse-server.vercel.app/courses/${params.id}`
                    );
                },
            },
            { path: '/signin', element: <SignIn /> },
            { path: '/signup', element: <SignUp /> },
        ],
    },
    {
        path: '/*',
        element: <ErrorPage />,
    },
]);
