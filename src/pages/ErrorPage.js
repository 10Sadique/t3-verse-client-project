import React from 'react';

const ErrorPage = () => {
    return (
        <div className="grid h-screen place-items-center">
            <div className="flex items-center gap-5 divide-x-4">
                <h1 className="text-6xl font-bold">404</h1>
                <p className="text-6xl text-gray-500">Page Not Found</p>
            </div>
        </div>
    );
};

export default ErrorPage;
