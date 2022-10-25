import React from 'react';

const CourseCard = ({ course, setSelectedCourese }) => {
    const { image, title, language, isBestseller } = course;

    return (
        <div
            className="flex flex-col p-3 bg-indigo-100 rounded-lg shadow-md "
            onClick={() => setSelectedCourese(course)}
        >
            <div className="w-full mb-5 overflow-hidden rounded-lg shadow-md">
                <img src={image} alt="" />
            </div>
            <div className="flex-1">
                <h1 className="mb-3 font-extrabold font-6xl">{title}</h1>
            </div>
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    {isBestseller && (
                        <p className="px-2 py-[2px] text-center text-[10px] text-white bg-yellow-700 rounded-sm">
                            Bestseller
                        </p>
                    )}
                    <p className="px-2 py-[2px] text-center text-[10px] text-white bg-green-700 rounded-sm">
                        {language}
                    </p>
                </div>
                <button
                    onClick={() => setSelectedCourese(course)}
                    className="px-5 py-3 font-semibold text-white transition-all duration-300 bg-indigo-600 rounded-md shadow-md hover:bg-indigo-700"
                >
                    Select Course
                </button>
            </div>
        </div>
    );
};

export default CourseCard;
