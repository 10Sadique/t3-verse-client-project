import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { FaUserAlt, FaMoon, FaSun } from 'react-icons/fa';

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const navLinks = (
        <div className="flex md:items-center flex-col md:flex-row">
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
        <div className="navbar bg-indigo-600 text-primary-content">
            <div className="navbar-start">
                <div className="dropdown">
                    <label
                        tabIndex={0}
                        className="btn bg-transparent hover:bg-transparent border-0 lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
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
                    <div className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-indigo-600 rounded-box w-52">
                        {navLinks}
                    </div>
                </div>
                <Link
                    to={`/`}
                    className="btn bg-indigo-700 border-0 hover:bg-indigo-700 normal-case font-bold text-xl space-x-3"
                >
                    <img
                        className="w-8 bg-blue-200 rounded-full p-2"
                        src={logo}
                        alt=""
                    />
                    <span>Verse</span>
                </Link>
            </div>
            {/* lg devices */}
            <div className="navbar-center hidden lg:flex">
                <div className="menu menu-horizontal p-0">{navLinks}</div>
            </div>
            <div className="navbar-end space-x-4 mr-4">
                <div
                    className="btn btn-ghost grid place-items-center"
                    onClick={() => setToggle(!toggle)}
                >
                    {toggle ? (
                        <FaMoon className="w-6 h-6" />
                    ) : (
                        <FaSun className="w-6 h-6" />
                    )}
                </div>
                <div className="btn btn-ghost  bg-indigo-100 rounded-full text-indigo-600 hover:bg-indigo-200">
                    <FaUserAlt className="h-6" />
                </div>
            </div>
        </div>
    );
};

export default Header;
