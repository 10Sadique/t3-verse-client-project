import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CheckoutSuccess = () => {
    const course = useLoaderData();
    const { id, title } = course;
    return (
        <div className="h-[50vh] md:h-[30vh] text-center">
            <h1 className="mb-10 text-lg font-semibold">
                Thank You for purchasing{' '}
                <span className="text-indigo-600">{title}</span>
            </h1>
            <Link
                to={`/courses/${id}`}
                className="px-5 py-3 font-semibold text-white transition-all duration-300 bg-indigo-600 rounded-md shadow-md hover:bg-indigo-700"
            >
                Go Back to Course
            </Link>
        </div>
    );
};

export default CheckoutSuccess;
