import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../components/CourseCard';

const Courses = () => {
    const courses = useLoaderData();

    const [selectedCourese, setSelectedCourese] = useState({});

    console.log(selectedCourese);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-8">
            <div className="col-span-1 lg:col-span-2">Side Nav</div>
            <div className="grid grid-cols-1 col-span-1 gap-5 md:col-span-2 lg:col-span-6 md:grid-cols-2 lg:grid-cols-3">
                {courses.map((course) => (
                    <CourseCard
                        setSelectedCourese={setSelectedCourese}
                        key={course.id}
                        course={course}
                    />
                ))}
            </div>
        </div>
    );
};

export default Courses;
