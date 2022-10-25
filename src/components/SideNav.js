import React from 'react';
import { GiRoundStar } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const SideNav = ({ selectedCourese }) => {
    const { id, title, image, title_desc, author, rating } = selectedCourese;

    const ratings = [];
    for (let i = 0; i < rating?.stars; i++) {
        ratings.push(<GiRoundStar key={i} />);
    }

    return (
        <div className="w-full p-5 bg-gray-100 rounded-lg">
            <h1 className="mb-3 text-xl font-extrabold text-center underline">
                Course Summery
            </h1>
            <div>
                {selectedCourese ? (
                    <div>
                        <div className="mb-5 overflow-hidden rounded-lg shadow-md">
                            <img src={image} alt="" />
                        </div>
                        <div className="mb-2">
                            <h1 className="mb-2 font-extrabold">{title}</h1>
                            <p className="mb-2 text-sm font-medium text-gray-500">
                                {title_desc}
                            </p>
                            <p className="font-medium">
                                Author:{' '}
                                <span className="text-indigo-600">
                                    {author}
                                </span>
                            </p>
                            <p className="flex items-center gap-2 font-medium">
                                Rating:{' '}
                                <span className="flex text-yellow-500">
                                    {ratings}
                                </span>
                            </p>
                        </div>
                        <Link to={`/courses/${id}`}>
                            <button className="w-full py-3 font-semibold text-white transition-all duration-300 bg-indigo-600 rounded-md shadow-md hover:bg-indigo-700">
                                Go to Course
                            </button>
                        </Link>
                    </div>
                ) : (
                    <p className="text-center text-gray-500">
                        No Courese Selected.
                    </p>
                )}
            </div>
        </div>
    );
};

export default SideNav;
