import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const image = form.image.value;
        const password = form.password.value;

        console.log(name, email, image, password);
    };

    return (
        <div>
            <h1 className="mb-10 text-4xl text-center font-bebas">Sign Up</h1>
            <div className="md:w-[40%] w-full bg-gray-100 text-gray-800 font-semibold px-5 py-5 rounded-lg mx-auto">
                <form onSubmit={handleSubmit}>
                    <div className="mb-5 space-y-2">
                        <label className="block" htmlFor="name">
                            Name
                        </label>
                        <input
                            required
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            className="w-full px-4 py-3 bg-white rounded shadow-sm"
                        />
                    </div>
                    <div className="mb-5 space-y-2">
                        <label className="block" htmlFor="email">
                            Email
                        </label>
                        <input
                            required
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            className="w-full px-4 py-3 bg-white rounded shadow-sm"
                        />
                    </div>
                    <div className="mb-5 space-y-2">
                        <label className="block" htmlFor="photo">
                            Photo URL
                        </label>
                        <input
                            required
                            type="text"
                            id="photo"
                            name="image"
                            placeholder="Photo URL"
                            className="w-full px-4 py-3 bg-white rounded shadow-sm"
                        />
                    </div>
                    <div className="mb-5 space-y-2">
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
                        <p className="text-red-500">{error?.slice(9, -1)}</p>
                    )} */}
                    <button
                        type="submit"
                        className="w-full px-5 py-3 text-white bg-indigo-600 rounded shadow-md"
                    >
                        Sign Up
                    </button>
                    <div className="divider">OR</div>
                    <div className="flex items-center gap-3 mb-4">
                        <button className="flex items-center justify-center flex-1 gap-3 px-5 py-3 text-white bg-indigo-600 rounded shadow-md">
                            <FaGoogle />
                            <span>Google</span>
                        </button>
                        <button className="flex items-center justify-center flex-1 gap-3 px-5 py-3 text-white bg-indigo-600 rounded shadow-md">
                            <FaGithub />
                            <span>GitHub</span>
                        </button>
                    </div>
                    <p>
                        Don't have an Account?{' '}
                        <Link
                            className="text-indigo-600 underline"
                            to={`/signin`}
                        >
                            Sign In
                        </Link>
                        .
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
