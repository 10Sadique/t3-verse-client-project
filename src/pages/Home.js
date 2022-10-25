import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../assets/hero.svg';
import Testimonial from '../components/Testimonial';

const Home = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 mb-14">
                <div className="order-2 col-span-2 my-auto md:order-1">
                    <h1 className="mb-8 text-5xl font-bold md:text-7xl">
                        Master the Skills to Drive your{' '}
                        <span className="text-indigo-600">Career</span>
                    </h1>
                    <p className="ml-1 md:w-[70%] font-medium text-gray-500 mb-6">
                        Join our world-class courses from the world’s leading
                        experts and enhance your programming skills.
                    </p>
                    <Link
                        to={`/courses`}
                        className="w-full normal-case bg-indigo-600 border-0 btn hover:bg-indigo-700 md:w-auto"
                    >
                        Show All Courses
                    </Link>
                </div>
                <div className="w-full mb-10 md:order-2 md:mb-0">
                    <img className="w-full" src={hero} alt="" />
                </div>
            </div>
            <Testimonial />
        </>
    );
};

export default Home;
