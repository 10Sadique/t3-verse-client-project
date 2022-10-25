import { createBrowserRouter } from 'react-router-dom';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import Main from '../layout/Main';
import Blog from '../pages/Blog';
import Courses from '../pages/Courses';
import FAQ from '../pages/FAQ';
import Home from '../pages/Home';
import SingleCourseDetails from '../pages/SingleCourseDetails';

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
            { path: '/signin', element: <SignIn /> },
            { path: '/signup', element: <SignUp /> },
        ],
    },
]);
