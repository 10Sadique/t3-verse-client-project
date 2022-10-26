import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { FaUserAlt, FaMoon, FaSun } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import ReactTooltip from 'react-tooltip';

const Header = () => {
    const [toggle, setToggle] = useState(false);

    // const navigate = useNavigate();

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                // navigate('/');
                console.log('Signed OUT!!');
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const navLinks = (
        <div className="flex flex-col md:items-center md:flex-row">
            <NavLink
                to={`/courses`}
                className={({ isActive }) =>
                    isActive
                        ? 'font-semibold py-3 px-5 md:py-2 md:px-3 bg-indigo-700 rounded-xl md:rounded-md'
                        : 'font-semibold py-3 px-5 md:py-2 md:px-3'
                }
            >
                Courses
            </NavLink>
            <NavLink
                to={`/blog`}
                className={({ isActive }) =>
                    isActive
                        ? 'font-semibold py-3 px-5 md:py-2 md:px-3 bg-indigo-700 rounded-xl md:rounded-md'
                        : 'font-semibold py-3 px-5 md:py-2 md:px-3'
                }
            >
                Blog
            </NavLink>
            <NavLink
                to={`/faq`}
                className={({ isActive }) =>
                    isActive
                        ? 'font-semibold py-3 px-5 md:py-2 md:px-3 bg-indigo-700 rounded-xl md:rounded-md'
                        : 'font-semibold py-3 px-5 md:py-2 md:px-3'
                }
            >
                FAQs
            </NavLink>
            {user?.uid ? (
                <NavLink
                    onClick={handleLogOut}
                    className="px-5 py-3 font-semibold md:py-2 md:px-3"
                >
                    Sign Out
                </NavLink>
            ) : (
                <div className="flex flex-col md:flex-row">
                    <NavLink
                        to={`/signin`}
                        className={({ isActive }) =>
                            isActive
                                ? 'font-semibold py-3 px-5 md:py-2 md:px-3 bg-indigo-700 rounded-xl md:rounded-md'
                                : 'font-semibold py-3 px-5 md:py-2 md:px-3'
                        }
                    >
                        Sign In
                    </NavLink>
                    <NavLink
                        to={`/signup`}
                        className={({ isActive }) =>
                            isActive
                                ? 'font-semibold py-3 px-5 md:py-2 md:px-3 bg-indigo-700 rounded-xl md:rounded-md'
                                : 'font-semibold py-3 px-5 md:py-2 md:px-3'
                        }
                    >
                        Sign Up
                    </NavLink>
                </div>
            )}
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
                    className="space-x-2 text-xl normal-case bg-indigo-600 border-0 font-extralight btn hover:bg-indigo-700"
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
                    className="grid w-10 h-10 text-indigo-600 transition-all duration-300 bg-blue-100 rounded-full cursor-pointer place-items-center"
                    onClick={() => setToggle(!toggle)}
                >
                    {toggle ? <FaMoon /> : <FaSun />}
                </div>
                <div className="grid w-10 h-10 overflow-hidden text-indigo-600 bg-indigo-100 rounded-full cursor-pointer place-items-center">
                    {user?.photoURL ? (
                        <div
                            className="w-full h-full"
                            data-tip={`${user?.displayName}`}
                            data-place="left"
                        >
                            <img
                                className="object-cover w-full h-full"
                                src={user?.photoURL}
                                alt=""
                            />
                            <ReactTooltip />
                        </div>
                    ) : (
                        <FaUserAlt />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
