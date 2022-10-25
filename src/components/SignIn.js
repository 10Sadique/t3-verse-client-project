import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div>
            <h1 className="mb-10 text-4xl font-bold text-center">Sign In</h1>
            <div className="md:w-[40%] w-full bg-gray-100 text-gray-800 font-semibold px-5 py-5 rounded-lg mx-auto">
                <form>
                    <div className="mb-5 space-y-2">
                        <label className="block" htmlFor="email">
                            Email
                        </label>
                        <input
                            required
                            name="email"
                            type="email"
                            id="email"
                            placeholder="Email"
                            className="w-full px-4 py-3 bg-white rounded shadow-sm"
                        />
                    </div>
                    <div className="mb-2 space-y-2">
                        <label className="block" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            required
                            name="password"
                            id="password"
                            placeholder="Password"
                            className="w-full px-4 py-3 bg-white rounded shadow-sm"
                        />
                    </div>
                    {/* {error && (
                            <p className="text-red-500">
                                {error?.slice(9, -1)}
                            </p>
                        )} */}
                    <p className="mb-5 text-indigo-600 underline">
                        Forgot password?
                    </p>
                    <button
                        type="submit"
                        className="w-full px-5 py-3 mb-5 text-white bg-indigo-600 rounded shadow-md"
                    >
                        Sign In
                    </button>
                    <p>
                        Don't have an Account?{' '}
                        <Link
                            className="text-indigo-600 underline"
                            to={`/signup`}
                        >
                            Sign Up
                        </Link>
                        .
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
