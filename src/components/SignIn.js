import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const SignIn = () => {
    const [error, setError] = useState('');

    const location = useLocation();
    const navigate = useNavigate();
    const to = location.state?.from?.pathname || '/';

    const { signIn, googleSignIn, githubSignIN, setLoading } =
        useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                navigate(to, { replace: true });
            })
            .catch((err) => {
                setError(err.message);
                console.error(err);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleGoogleSingIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                console.log(user);
                setError('');
                navigate(to, { replace: true });
            })
            .catch((err) => {
                setError(err.message);
                console.error(err);
            })
            .finally(() => {
                setLoading(false);
            });
    };
    const handleGithubSignIn = () => {
        githubSignIN()
            .then((result) => {
                const user = result.user;
                console.log(user);
                setError('');
                navigate(to, { replace: true });
            })
            .catch((err) => {
                setError(err.message);
                console.error(err);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div>
            <h1 className="mb-10 text-4xl font-bold text-center">Sign In</h1>
            <div className="md:w-[40%] w-full bg-gray-100 text-gray-800 font-semibold px-5 py-5 rounded-lg mx-auto">
                <form onSubmit={handleSubmit}>
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
                    {error && (
                        <p className="text-red-500">{error?.slice(9, -1)}</p>
                    )}
                    <p className="mb-5 text-indigo-600 underline">
                        {/* Forgot password? */}
                    </p>
                    <button
                        type="submit"
                        className="w-full px-5 py-3 text-white bg-indigo-600 rounded shadow-md"
                    >
                        Sign In
                    </button>
                    <div className="divider">OR</div>
                    <div className="flex items-center gap-3 mb-4">
                        <button
                            className="flex items-center justify-center flex-1 gap-3 px-5 py-3 text-white bg-indigo-600 rounded shadow-md"
                            onClick={handleGoogleSingIn}
                        >
                            <FaGoogle />
                            <span>Google</span>
                        </button>
                        <button
                            className="flex items-center justify-center flex-1 gap-3 px-5 py-3 text-white bg-indigo-600 rounded shadow-md"
                            onClick={handleGithubSignIn}
                        >
                            <FaGithub />
                            <span>GitHub</span>
                        </button>
                    </div>
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
