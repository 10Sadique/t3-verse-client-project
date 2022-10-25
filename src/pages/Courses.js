import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import SideNav from '../components/SideNav';

const Courses = () => {
    const courses = useLoaderData();

    const [selectedCourese, setSelectedCourese] = useState('');

    return (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-8">
            <div className="h-full col-span-1 lg:col-span-2 ">
                <SideNav selectedCourese={selectedCourese} />
            </div>
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
