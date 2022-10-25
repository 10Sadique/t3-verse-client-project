import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { GiRoundStar } from 'react-icons/gi';
import { FaInfoCircle, FaGlobe, FaCheck } from 'react-icons/fa';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { TbPoint } from 'react-icons/tb';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
// import { Toaster } from 'react-hot-toast';

const SingleCourseDetails = () => {
    const course = useLoaderData();

    const {
        // id,
        title,
        title_desc,
        author,
        contents,
        desc,
        duration,
        image,
        isBestseller,
        language,
        lastUpdate,
        learn,
        price,
        rating,
        requirements,
    } = course;

    const ratings = [];
    for (let i = 0; i < rating?.stars; i++) {
        ratings.push(<GiRoundStar key={i} />);
    }

    const pdfRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => pdfRef.current,
        documentTitle: `${title}`,
        // onAfterPrint: toast.success('PDF Download Successfully!'),
    });

    return (
        <div>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                {/* details section */}

                <div
                    ref={pdfRef}
                    // style={{ width: '100%', height: window.innerHeight }}
                    className="col-span-1 md:col-span-2"
                >
                    <div className="p-5 bg-gray-100 rounded-lg shadow-md">
                        <h1 className="mb-3 text-xl font-extrabold lg:text-4xl">
                            {title}
                        </h1>
                        <p className="mb-3 font-medium text-gray-500 ">
                            {title_desc}
                        </p>
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                            {isBestseller && (
                                <p className="px-2 py-1 text-xs text-white bg-yellow-700 rounded-sm">
                                    Bestseller
                                </p>
                            )}
                            <span>{rating.stars}.0</span>
                            <span className="flex text-yellow-500">
                                {ratings}
                            </span>
                            <span>
                                (
                                {rating.reviews.toLocaleString(undefined, {
                                    minimumFractionDigits: 0,
                                })}{' '}
                                reviews)
                            </span>
                            <span>
                                {rating.students.toLocaleString(undefined, {
                                    minimumFractionDigits: 0,
                                })}{' '}
                                students
                            </span>
                        </div>
                        <p className="mb-3">
                            Created by{' '}
                            <span className="text-indigo-600 underline">
                                {author}
                            </span>
                        </p>
                        <div className="flex items-center gap-5 mb-5">
                            <div className="flex items-center gap-2">
                                <FaInfoCircle />
                                <span>Last updated</span>
                                <span>{lastUpdate}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaGlobe />
                                <p>{language}</p>
                            </div>
                        </div>
                        <div className="border-[1px] border-gray-400/60 p-5 rounded-sm mb-5">
                            <h1 className="mb-4 text-xl font-bold md:text-2xl">
                                What will you learn?
                            </h1>
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                {learn.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3"
                                    >
                                        <FaCheck className="w-5 h-5 p-1 bg-white rounded-full" />
                                        <p className="w-[80%]">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* course contents */}
                        <h1 className="mb-3 text-xl font-bold md:text-2xl ">
                            Courese Contents
                        </h1>
                        <div className="mb-4 divide-y-2 bg-gray-50">
                            {contents.map((content, i) => (
                                <div
                                    className="flex items-center gap-2 px-5 py-2"
                                    key={i}
                                >
                                    <MdOutlineKeyboardArrowRight />
                                    <p className="flex-1">{content}</p>
                                    <p className="px-3 py-1 text-xs text-white bg-indigo-600 rounded-3xl">
                                        Premium
                                    </p>
                                </div>
                            ))}
                        </div>
                        <h1 className="mt-5 mb-2 text-xl font-bold md:text-2xl">
                            Requirements
                        </h1>
                        <div>
                            {requirements.map((req, i) => (
                                <div
                                    className="flex items-center gap-2"
                                    key={i}
                                >
                                    <TbPoint />
                                    <p>{req}</p>
                                </div>
                            ))}
                        </div>
                        <h1 className="mt-5 mb-2 text-xl font-bold md:text-2xl">
                            Description
                        </h1>
                        <p className="text-gray-500">{desc}</p>
                    </div>
                </div>
                {/* pricing section */}
                <div className="col-span-1 p-5 bg-gray-100 rounded-lg shadow-md h-max">
                    <div className="mb-3 overflow-hidden rounded-lg shadow-md">
                        <img src={image} alt="" />
                    </div>
                    <div>
                        <p className="mb-3 text-3xl font-bold ">${price}</p>
                        <p className="font-semibold">
                            {duration} on demand videos!
                        </p>
                    </div>
                    <Link>
                        <button className="w-full py-3 mt-5 font-semibold text-white transition-all duration-300 bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700">
                            Get Premium Access
                        </button>
                    </Link>
                </div>
            </div>
            <div
                className="grid place-items-center"
            >
                <button
                    className="w-full px-5 py-3 mx-auto mt-5 font-semibold text-white transition-all duration-300 bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 md:w-auto"
                    onClick={handlePrint}
                >
                    Download PDF
                </button>
            </div>
        </div>
    );
};

export default SingleCourseDetails;
