import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="grid h-screen place-items-center">
            <div className="flex flex-col items-center gap-10">
                <div className="flex items-center gap-5 divide-x-4">
                    <h1 className="text-6xl font-bold">404</h1>
                    <p className="text-6xl text-gray-500">Page Not Found</p>
                </div>
                <Link to={`/`}>
                    <button className="px-5 py-3 font-semibold text-white bg-indigo-600 rounded-lg shadow-md">
                        Go Back to Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
