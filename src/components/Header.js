import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { FaUserAlt, FaMoon, FaSun } from 'react-icons/fa';

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const navLinks = (
        <div className="flex flex-col md:flex-row">
            <Link to={`/courses`} className="btn btn-ghost">
                Courses
            </Link>
            <Link to={`/blog`} className="btn btn-ghost">
                Blog
            </Link>
            <Link to={`/faq`} className="btn btn-ghost">
                FAQ
            </Link>
        </div>
    );

    return (
        <div className="navbar bg-primary text-primary-content">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                    className="btn btn-ghost normal-case font-bold text-xl space-x-3"
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
            <div className="navbar-end space-x-3 mr-4">
                <div
                    className="btn btn-ghost bg-indigo-100 hover:bg-indigo-200 text-indigo-500 rounded-full"
                    onClick={() => setToggle(!toggle)}
                >
                    {toggle ? (
                        <FaMoon className="w-4 h-4" />
                    ) : (
                        <FaSun className="w-4 h-4" />
                    )}
                </div>
                <div className="btn btn-ghost  bg-indigo-100 rounded-full text-indigo-600 hover:bg-indigo-200">
                    <FaUserAlt />
                </div>
            </div>
        </div>
    );
};

export default Header;
