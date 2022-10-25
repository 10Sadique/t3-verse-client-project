import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../assets/hero.svg';

const Home = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="col-span-2 my-auto order-2 md:order-1">
                <h1 className="text-5xl md:text-7xl font-bold mb-8">
                    Master the Skills to Drive your{' '}
                    <span className="text-indigo-600">Career</span>
                </h1>
                <p className="ml-1 md:w-[70%] font-medium text-gray-500 mb-6">
                    Join our world-class courses from the world’s leading
                    experts and enhance your programming skills.
                </p>
                <Link
                    to={`/courses`}
                    className="btn btn-primary normal-case w-full md:w-auto"
                >
                    Show All Courses
                </Link>
            </div>
            <div className="md:order-2 w-full mb-10 md:mb-0">
                <img className="w-full" src={hero} alt="" />
            </div>
        </div>
    );
};

export default Home;
