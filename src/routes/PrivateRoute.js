import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div className="flex items-center justify-center">
                <button className="bg-indigo-600 border-0 btn hover:bg-indigo-600 loading">
                    loading
                </button>
            </div>
        );
    }

    if (!user) {
        return (
            <Navigate
                to={`/signin`}
                state={{ from: location }}
                replace={true}
            />
        );
    }

    return children;
};

export default PrivateRoute;
