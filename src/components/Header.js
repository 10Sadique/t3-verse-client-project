import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { FaUserAlt, FaMoon, FaSun } from 'react-icons/fa';

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const navLinks = (
        <div className="flex flex-col md:items-center md:flex-row">
            <NavLink
                to={`/courses`}
                className={({ isActive }) =>
                    isActive
                        ? 'font-semibold py-3 px-5 md:py-2 md:px-3 bg-indigo-700 rounded-md'
                        : 'font-semibold py-3 px-5 md:py-2 md:px-3'
                }
            >
                Courses
            </NavLink>
            <NavLink
                to={`/blog`}
                className={({ isActive }) =>
                    isActive
                        ? 'font-semibold py-3 px-5 md:py-2 md:px-3 bg-indigo-700 rounded-md'
                        : 'font-semibold py-3 px-5 md:py-2 md:px-3'
                }
            >
                Blog
            </NavLink>
            <NavLink
                to={`/faq`}
                className={({ isActive }) =>
                    isActive
                        ? 'font-semibold py-3 px-5 md:py-2 md:px-3 bg-indigo-700 rounded-md'
                        : 'font-semibold py-3 px-5 md:py-2 md:px-3'
                }
            >
                FAQ
            </NavLink>
        </div>
    );

    return (
        <div className="bg-indigo-600 navbar text-primary-content">
            <div className="navbar-start">
                <div className="dropdown">
                    <label
                        tabIndex={0}
                        className="bg-transparent border-0 btn hover:bg-transparent lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    {/* sm devices */}
                    <div className="p-2 mt-3 bg-indigo-600 shadow menu menu-compact dropdown-content rounded-box w-52">
                        {navLinks}
                    </div>
                </div>
                <Link
                    to={`/`}
                    className="space-x-3 text-xl font-bold normal-case bg-indigo-700 border-0 btn hover:bg-indigo-700"
                >
                    <img
                        className="w-8 p-2 bg-blue-200 rounded-full"
                        src={logo}
                        alt=""
                    />
                    <span>Verse</span>
                </Link>
            </div>
            {/* lg devices */}
            <div className="hidden navbar-center lg:flex">
                <div className="p-0 menu menu-horizontal">{navLinks}</div>
            </div>
            <div className="mr-4 space-x-4 navbar-end">
                <div
                    className="grid btn btn-ghost place-items-center"
                    onClick={() => setToggle(!toggle)}
                >
                    {toggle ? (
                        <FaMoon className="w-6 h-6" />
                    ) : (
                        <FaSun className="w-6 h-6" />
                    )}
                </div>
                <div className="text-indigo-600 bg-indigo-100 rounded-full btn btn-ghost hover:bg-indigo-200">
                    <FaUserAlt className="h-6" />
                </div>
            </div>
        </div>
    );
};

export default Header;
